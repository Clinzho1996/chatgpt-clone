import { adminDb } from "@/firebaseAdmin";
import query from "@/lib/queryApi";
import admin from "firebase-admin";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	answer: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	try {
		const { prompt, chatId, session } = req.body;

		// Input validation
		if (!prompt) {
			return res.status(400).json({ answer: "Please provide a prompt" });
		}

		if (!chatId) {
			return res.status(400).json({ answer: "Please provide a valid chat ID" });
		}

		// Gemini Query (no need for model argument)
		const response = await query(prompt);

		if (!response) {
			return res
				.status(500)
				.json({ answer: "Gemini was unable to find an answer for that" });
		}

		const message = {
			text: response,
			createdAt: admin.firestore.Timestamp.now(),
			user: {
				_id: "Gemini",
				name: "Gemini",
				avatar: "https://links.papareact.com/89k", // you can swap this for a Gemini logo if you want
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
