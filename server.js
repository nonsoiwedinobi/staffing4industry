require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Endpoint to handle translation requests
app.post("/translate", async (req, res) => {
  const { text, targetLanguage } = req.body;
  const apiKey = process.env.GOOGLE_API_KEY;

  console.log("Request to translate:", text, "to", targetLanguage);

  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
          format: "text",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("Translation API response:", data);
    const translatedText =
      data?.data?.translations?.[0]?.translatedText || text;
    res.json({ translatedText });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Translation failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/translate", async (req, res) => {
  const { text, targetLanguage } = req.body;
  const apiKey = process.env.GOOGLE_API_KEY;

  console.log("Request to translate:", text, "to", targetLanguage);

  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
          format: "text",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("Translation API response:", data);
    const translatedText =
      data?.data?.translations?.[0]?.translatedText || text;
    res.json({ translatedText });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Translation failed" });
  }
});
