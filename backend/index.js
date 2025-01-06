import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post("/patient", (req, res) => {
  const { fullName, phone, email, message } = req.body;

  if (!fullName || !phone || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }
  console.log("Received patient data: ", req.body);
  res
    .status(200)
    .json({ message: "Patient data received succesfully.", data: req.body });
});

const port = 5000;
app.listen(port, () => console.log(`App is running on port ${port}`));
