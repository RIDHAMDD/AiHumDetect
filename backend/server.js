const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/predict", (req, res) => {
  const { model_name, content } = req.body;
  console.log("Received prediction request for model:", model_name);
  console.log("Content received:", content);

  // Run Python script
  const python = spawn("python3", ["predict.py", model_name, content]);

  let result = "";
  python.stdout.on("data", (data) => {
    console.log("Python output:", data.toString());
    result += data.toString();
  });

  python.stderr.on("data", (data) => {
    console.error("Python error:", data.toString());
  });

  python.on("close", () => {
    console.log("Sending response:", result.trim());
    res.json({ model: model_name, prediction: result.trim() });
  });
});


const PORT = process.env.PORT || 5149;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
