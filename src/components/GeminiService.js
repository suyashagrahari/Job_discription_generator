import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI('AIzaSyB-a_-nkxziWWhCdEkIK_Vfs42LueGOIak');

export async function geminiResponse(message) {
    const timeout = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('LLM API timeout'));
      }, 10000); // 10 seconds
    });
  
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = message;
      const result = await Promise.race([
        model.generateContent(prompt),
        timeout,
      ]);
      const response = await result.response;
      const text = response.text();
      return text;
    } catch (error) {
      if (error.message === 'LLM API timeout') {
        // Return a standard message indicating the user is unavailable
        return "Sorry, I'm unable to respond at the moment. Please try again later.";
      } else {
        throw error;
      }
    }
  }
