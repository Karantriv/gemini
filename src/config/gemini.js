// // const apikey = "AIzaSyA2eMFgx2EFUtS3WtRB0nI2zOG5SwKegGw"


import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const API_KEY = "AIzaSyA2eMFgx2EFUtS3WtRB0nI2zOG5SwKegGw";

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(API_KEY);

// Get the generative model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Use the correct model name

const generationConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

// Function to run the chat
async function runChat(prompt) {
  try {
      // Start a chat session
      const chat = model.startChat({
          generationConfig,
          safetySettings,
          history: [],
      });

      // Send the user's prompt and get the response
      const result = await chat.sendMessage(prompt);
      const response = result.response;
      console.log(response.text());

      // Return the response text
      return response.text();
  }   catch (error) {
      console.error("Error during chat:", error);
      throw error;
  }
}


export default runChat;