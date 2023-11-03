import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { prompt, chatId, model, session } = req.body;

    // Input validation
    if (!prompt) {
      return res.status(400).json({ answer: "Please provide a prompt" });
    }

    if (!chatId) {
      return res.status(400).json({ answer: "Please provide a valid chat ID" });
    }

    // ChatGPT Query
    const response = await query(prompt, model);

    if (!response) {
      return res
        .status(500)
        .json({ answer: "ChatGPT was unable to find an answer for that" });
    }

    const message = {
      text: response,
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "ChatGPT",
        name: "ChatGPT",
        avatar: "https://links.papareact.com/89k",
      },
    };

    await adminDb
      .collection("users")
      .doc(session?.user?.email)
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .add(message);

    return res.status(200).json({ answer: message.text });
  } catch (error) {
    // Handle and log errors
    console.error("Error:", error);
    return res.status(500).json({ answer: "An error occurred" });
  }
}
