import model from "./chatgpt";

const query = async (prompt: string) => {
	try {
		const result = await model.generateContent(prompt);
		const response = await result.response;
		return response.text();
	} catch (err: any) {
		return `Clinton's AI was unable to find an answer for that! (Error: ${err.message})`;
	}
};

export default query;
