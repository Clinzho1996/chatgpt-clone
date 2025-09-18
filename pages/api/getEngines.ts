import type { NextApiRequest, NextApiResponse } from "next";

type Option = {
	value: string;
	label: string;
};

type Data = {
	modelOptions: Option[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	// Gemini models (expand as needed)
	const geminiModels: Option[] = [
		{ value: "gemini-1.5-pro", label: "Gemini 1.5 Pro" },
		{ value: "gemini-1.5-flash", label: "Gemini 1.5 Flash" },
		{ value: "gemini-1.0-pro", label: "Gemini 1.0 Pro" },
	];

	res.status(200).json({
		modelOptions: geminiModels,
	});
}
