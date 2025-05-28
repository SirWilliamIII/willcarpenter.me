const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from root
app.use(express.static(__dirname));

// Serve index.html on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Optional: Custom 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Listening on http://localhost:${PORT}`);
});
