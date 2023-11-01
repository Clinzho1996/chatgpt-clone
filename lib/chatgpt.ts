import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.CHATGPT_API, 
});

export default openai;
