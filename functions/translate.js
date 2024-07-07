const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const { text, targetLanguage } = JSON.parse(event.body);
  const apiKey = process.env.GOOGLE_API_KEY;

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
    const translatedText =
      data?.data?.translations?.[0]?.translatedText || text;
    return {
      statusCode: 200,
      body: JSON.stringify({ translatedText }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Translation failed" }),
    };
  }
};
