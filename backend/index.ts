import "dotenv/config";
import express from "express";
import photosRouter from "./routes/photos.js";

const app = express();
const PORT = process.env.PEXELGRAM_PORT;

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Vary", "Origin");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use("/v1/photos", photosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
