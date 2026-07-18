// imports
import express, { Request, Response } from "express";
import { z } from "zod";
import db from "./db/database";

// app initialization + formatting
const app = express();
app.use(express.json());

// schema for validation
const targetSchema = z.object({
  ip: z.ipv4(),
  status: z.enum(["Recon", "Rooted", "Abandoned"]),
});

// crud
app.post("/db", (req: Request, res: Response) => {
  const validation = targetSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json(validation.error);
  }

  const data = validation.data;
  const insert = db.prepare("INSERT INTO targets (ip, status) VALUES (?, ?)");
  insert.run(data.ip, data.status);

  return res.status(201).json({ message: "Target saved successfully." });
});

// port listening
app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
