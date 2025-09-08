import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, language = "en" } = req.body;
    const userInput = messages.map((m: any) => `${m.role}: ${m.text}`).join("\n");

    const prompt = `You are a helpful language tutor. Reply in ${language}.
Correct grammar when needed, explain shortly in Portuguese, and encourage the student.
Conversation so far:
${userInput}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    res.json({ assistant: responseText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao processar a conversa" });
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`✅ Backend rodando em http://localhost:${port}`));
