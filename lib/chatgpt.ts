import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.CHATGPT_API,
});

console.log(process.env.CHATGPT_API);

const openai = new OpenAIApi(configuration);

export default openai;
