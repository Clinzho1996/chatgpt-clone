import Configuration from "openai";
import OpenAI from "openai";

const configuration = new Configuration({
  apiKey: process.env.CHATGPT_API,
});

const openai = new OpenAI(configuration);

export default openai;
