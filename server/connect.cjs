const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = 3000;

app.use(cors()); // CORS-ი დაამატეთ, რათა შეილახოს სხვა domenებიდან მოთხოვნები
app.use(express.json());

async function connectDB() {
  const Db = process.env.ATLAS_URL;
  const client = new MongoClient(Db);

  try {
    await client.connect();
    return client;
  } catch (error) {
    throw error;
  }
}

app.post("/patients", async (req, res) => {
  const { fullName, phone, email, message } = req.body;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!fullName || !phone || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  const client = await connectDB();
  try {
    const patient = { fullName, phone, email, message };

    const result = await client
      .db("Surrogacy")
      .collection("Users")
      .insertOne(patient);
    console.log(patient);
    res.status(201).json({
      message: "Patient added",
      patient: { id: result.insertedId, ...patient },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding patient", error: error.message });
  } finally {
    await client.close(); // MongoDB კავშირის დახურვა
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
