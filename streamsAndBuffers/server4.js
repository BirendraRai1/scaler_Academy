//Using a transform stream to compress data before sending it to the client.
const fs = require("fs");
const zlib = require("zlib");
const express = require("express");
const app = express();

app.get("/compressed-file", (req, res) => {
  const fileStream = fs.createReadStream("large-file.txt");
  const gzip = zlib.createGzip(); // Transform stream to compress data

  res.setHeader("Content-Encoding", "gzip");
  res.setHeader("Content-Type", "text/plain");

  // Pipe the file stream through gzip and then to the response
  fileStream.pipe(gzip).pipe(res);

  fileStream.on("error", (err) => {
    console.error("Error reading file:", err);
    res.status(500).send("File not found");
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});