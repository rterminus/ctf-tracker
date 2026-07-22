export interface Target {
  id: number;
  ip: string;
  name: string;
  status: "rooted" | "user" | "recon" | "abandoned";
  created_at: string;
}
