import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

// Example: Create a model instance
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });

export default model;
