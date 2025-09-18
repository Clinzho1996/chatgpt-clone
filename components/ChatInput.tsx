"use client";
import { db } from "@/firebase";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";
import ModelSelection from "./ModelSelection";

type Props = {
	chatId: string;
};

// init Gemini client
const genAI = new GoogleGenerativeAI(
	process.env.NEXT_PUBLIC_GEMINI_API_KEY as string
);

function ChatInput({ chatId }: Props) {
	const [prompt, setPrompt] = useState("");
	const { data: session } = useSession();
	const { data: model } = useSWR("model", {
		fallbackData: "gemini-2.0-flash-001",
	});

	const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!prompt) return;

		const input = prompt.trim();
		setPrompt("");

		const message: Message = {
			text: input,
			createdAt: serverTimestamp(),
			user: {
				_id: session?.user?.email!,
				name: session?.user?.name!,
				avatar:
					session?.user?.image! ||
					`https://ui-avatars.com/api/?name=${session?.user?.name}`,
			},
		};

		await addDoc(
			collection(
				db,
				"users",
				session?.user?.email!,
				"chats",
				chatId,
				"messages"
			),
			message
		);

		// toast notification to say loading
		const notification = toast.loading("Clinton's AI is thinking...");

		try {
			// Gemini call
			const geminiModel = genAI.getGenerativeModel({ model });
			const result = await geminiModel.generateContent(input);
			const response = await result.response;
			const text = response.text();

			// Save Gemini response to Firestore
			const reply: Message = {
				text,
				createdAt: serverTimestamp(),
				user: {
					_id: "Gemini",
					name: "Gemini",
					avatar: "https://links.papareact.com/89k",
				},
			};

			await addDoc(
				collection(
					db,
					"users",
					session?.user?.email!,
					"chats",
					chatId,
					"messages"
				),
				reply
			);

			toast.success("Clinton's AI has responded!", {
				id: notification,
			});
		} catch (error: any) {
			console.error(error);
			toast.error(`Error: ${error.message}`, { id: notification });
		}
	};

	return (
		<div className="bg-gray-700 md:bg-gray-700/50 text-gray-400 rounded-lg text-sm m-2 w-[96%] md:w-full fixed bottom-0 md:relative">
			<form onSubmit={sendMessage} className="p-3 space-x-5 flex">
				<input
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					className="focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
					disabled={!session}
					type="text"
					placeholder="type your message here ..."
				/>
				<button
					type="submit"
					disabled={!prompt || !session}
					className="bg-[#1187D6] hover:opacity-50 font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed">
					<PaperAirplaneIcon className="h-4 w-4 -rotate-45 text-white" />
				</button>
			</form>

			<div className="md:hidden">
				<ModelSelection />
			</div>
		</div>
	);
}

export default ChatInput;
