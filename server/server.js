import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.get("/evana", (req, res) => {
  res.status(200).json({ message: "Hello Evana" });
});

app.post("/data", (req, res) => {
  res.status(200).json({
    data: req.body,
    timestamp: new Date().toISOString(),
  });
});

app.post("/ai", async (req, res) => {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: req.body.prompt }],
    });
    res.status(200).json({ output: response.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
