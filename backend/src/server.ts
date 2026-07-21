// imports
import express, { Request, Response } from "express";
import { z } from "zod";
import db from "./db/database";

// app initialization + formatting
const app = express();
app.use(express.json());

// schema for validation
const targetSchema = z.object({
  ip: z.ipv4("IP format invalid."),
  name: z.string().min(1, "A name is required."),
  status: z.enum(["recon", "rooted", "abandoned"], {
    message: "Invalid status. Valid: recon, rooted, abandoned",
  }),
});

//// crud
// create/POST/INSERT
app.post("/targets", (req: Request, res: Response) => {
  const validation = targetSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json(validation.error);
  }

  const data = validation.data;
  const create = db.prepare(
    "INSERT INTO targets (ip, name, status) VALUES (?, ?, ?)",
  );
  create.run(data.ip, data.name, data.status);

  return res.status(201).json({ message: "Target saved successfully." });
});

// read/GET/SELECT
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

  return res.status(200).json(target);
});

// update/PUT/UPDATE
app.put("/targets/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const statusSchema = targetSchema.pick({ status: true });
  const validation = statusSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json(validation.error);
  }

  const status = validation.data.status;
  const update = db.prepare("UPDATE targets SET status = ? WHERE id = ?");
  const target = update.run(status, id);

  if (target.changes === 0) {
    return res.status(404).json({ message: "Target not found." });
  }

  return res
    .status(200)
    .json({ message: "Target status modified successfully." });
});

// delete
app.delete("/targets/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const del = db.prepare("DELETE FROM targets WHERE id = ?");
  const target = del.run(id);

  if (target.changes === 0) {
    return res.status(404).json({ message: "Target not found." });
  }

  return res.status(204).send();
});

// port listening
app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
