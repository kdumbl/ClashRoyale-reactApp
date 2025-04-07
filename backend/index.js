const fs = require("fs");

const apiKey = fs.readFileSync("./key1.txt").toString();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const axios = require("axios");

app.post("/api/chests", async (req, res) => {
  try {
    let myTagRaw = req.body.id;
    let myTag = encodeURIComponent(myTagRaw);
    let apiUrl =
      "https://api.clashroyale.com/v1/players/" + myTag + "/upcomingchests";
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error fetching" });
  }
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
