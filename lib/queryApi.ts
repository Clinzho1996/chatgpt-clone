import openai from "./chatgpt";

const query = async (
  prompt: string,
  model: string,
  retries = 3
): Promise<any> => {
  try {
    const res = await openai.createCompletion({
      model,
      prompt,
      temperature: 0.9,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return res.data.choices[0].text;
  } catch (err: any) {
    if (retries > 0 && err.response && err.response.status === 429) {
      // Retry with exponential backoff
      const delay = Math.pow(2, 3 - retries) * 1000; // Wait 1, 2, 4 seconds
      await new Promise((resolve) => setTimeout(resolve, delay));
      return query(prompt, model, retries - 1);
    } else {
      return `Clinton's AI was unable to find an answer for that! (Error: ${err.message})`;
    }
  }
};

export default query;
