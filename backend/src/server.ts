// imports
import express, { Request, Response } from "express";
import { z } from "zod";
import db from "./db/database";

// app initialization + formatting
const app = express();
app.use(express.json());

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "pong!" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
