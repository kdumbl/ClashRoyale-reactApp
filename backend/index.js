const fs = require("fs");

const apiKey = fs.readFileSync("./key.txt").toString();
const myTagRaw = "#92PRPU9P";
const myTag = encodeURIComponent(myTagRaw);
const apiUrl =
  "https://api.clashroyale.com/v1/players/" + myTag + "/upcomingchests";

const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const axios = require("axios");

app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      mode: "no-cors",
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error fetching data from external api" });
  }
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
