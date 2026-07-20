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

//// crud
// create/POST
app.post("/targets", (req: Request, res: Response) => {
  const validation = targetSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json(validation.error);
  }

  const data = validation.data;
  const create = db.prepare("INSERT INTO targets (ip, status) VALUES (?, ?)");
  create.run(data.ip, data.status);

  return res.status(201).json({ message: "Target saved successfully." });
});

// read/GET
app.get("/targets", (req: Request, res: Response) => {
  const read = db.prepare("SELECT * FROM targets ORDER BY created_at");
  const targets = read.all();

  return res.status(200).json(targets);
});

app.get("/targets/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const read = db.prepare("SELECT * FROM targets WHERE id = ?");
  const target = read.get(id);

  if (!target) {
    return res.status(404).json({ message: "Target not found." });
  }

  return res.status(201).json(target);
});

// port listening
app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
