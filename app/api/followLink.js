const express = require("express");
const axios = require("axios");
const { URL } = require("url");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", async (req, res) => {
  try {
    const url = req.query.url;

    // Mengikuti URL yang diberikan
    const response = await axios.get(url, { maxRedirects: 0, validateStatus: null });

    // Mendapatkan URL tujuan dari header 'location'
    if (response.headers.location) {
      const redirectURL = new URL(response.headers.location);
      const originalURL = redirectURL.href;
      const modifiedURL = originalURL.replace("/file/", "/embed/");

      // Menyiapkan data respons JSON dengan URL tujuan
      const responseData = {
        originalURL: url,
        redirectedURL: modifiedURL,
      };

      res.json(responseData);
    } else {
      console.log("Link tidak mengalami pengalihan.");
      res.status(400).json({ message: "Link tidak mengalami pengalihan" });
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan saat mengakses link" });
  }
});

app.get("/ace", async (req, res) => {
  try {
    const url = req.query.url;

    // Mengikuti URL yang diberikan
    const response = await axios.get(url, { maxRedirects: 0, validateStatus: null });

    // Mendapatkan URL tujuan dari header 'location'
    if (response.headers.location) {
      const redirectURL = new URL(response.headers.location);
      const originalURL = redirectURL.href;
      const modifiedURL = originalURL.replace("https://acefile.co/f/", "https://acefile.co/player/");

      // Menyiapkan data respons JSON dengan URL tujuan
      const responseData = {
        originalURL: url,
        redirectedURL: modifiedURL,
      };

      res.json(responseData);
    } else {
      console.log("Link tidak mengalami pengalihan.");
      res.status(400).json({ message: "Link tidak mengalami pengalihan" });
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan saat mengakses link" });
  }
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server backend berjalan pada port ${PORT}`);
});
