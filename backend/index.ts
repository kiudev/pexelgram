import "dotenv/config";
import express from "express";
import photosRouter from "./routes/photos.js";
import cors from "cors";

const app = express();
const PORT = process.env.PEXELGRAM_PORT;

app.use(express.json());
app.use(cors());

app.use("/v1/photos", photosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
