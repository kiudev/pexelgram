import express from "express";
import {
  searchPhotos,
  curatedPhotos,
  getPhoto,
} from "../controllers/photosController.js";

const router = express.Router();

router.get("/search", searchPhotos);

router.get("/curated", curatedPhotos);

router.get("/:id", getPhoto);

export default router;
