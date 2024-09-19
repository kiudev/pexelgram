import { createClient } from "pexels";
import type { Request, Response } from "express";

const API_KEY: string = process.env.PEXELGRAM_API_KEY || "";

const client = createClient(API_KEY);

export const searchPhotos = async (req: Request, res: Response) => {
  const { query = "mountain" } = req.query;

  if (!query) {
    res.status(400).json({ error: "Query is required" });
    return;
  }

  try {
    const response = await client.photos.search({
      query: query as string,
      page: 1,
      per_page: 10,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error fetching images" });
  }
};

export const curatedPhotos = async (req: Request, res: Response) => {
  try {
    const response = await client.photos.curated({
      page: 1,
      per_page: 10,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error fetching images" });
  }
};

export const getPhoto = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ error: "ID is required" });
    return;
  }

  try {
    const response = await client.photos.show({ id });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error fetching images" });
  }
};
