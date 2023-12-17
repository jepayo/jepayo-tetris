import express from "express";

const app = express();
const port = 80;

app.use(express.static("public"));

// GET home page
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
