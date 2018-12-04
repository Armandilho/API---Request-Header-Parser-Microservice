const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/Public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {});

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public", "index.html"))
);

app.get("/api/whoami", (req, res) => {
  return res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
});

app.use((req, res) => {
  res.send("404: Page not Found", 404);
});
