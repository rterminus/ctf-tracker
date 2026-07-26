import { useState } from "react";
import type { Target } from "../types";

const AddTargetModal = ({
  isOpen,
  onClose,
  onAdd,
}: {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (target: Partial<Target>) => Promise<void>;
}) => {
  const [name, setName] = useState("");
  const [ip, setIp] = useState("");
  const [status, setStatus] = useState<Target["status"]>("recon");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    await onAdd({
      ip: ip,
      name: name,
      status: status,
    });

    // Limpa os campos e fecha
    setName("");
    setIp("");
    setStatus("recon");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-background border-outline flex w-96 flex-col gap-4 rounded-xl border p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">Add Target</h2>
          <button
            onClick={onClose}
            className="text-text-muted hover:bg-outline h-8 w-8 items-center justify-center rounded-full text-xl font-extrabold transition-colors hover:cursor-pointer hover:text-white"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label className="text-text-muted">Target Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background border-outline rounded-lg border p-2 text-white focus:outline-none"
              placeholder="ex: Metasploitable 3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-text-muted">IP Address</label>
            <input
              type="text"
              required
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              className="bg-background border-outline rounded-lg border p-2 text-white focus:outline-none"
              placeholder="ex: 10.10.10.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-text-muted">Initial Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Target["status"])}
              className="bg-background border-outline text-text-muted rounded-lg border p-2 transition-colors hover:text-white focus:outline-none"
            >
              <option value="recon">Recon</option>
              <option value="rooted">Rooted</option>
              <option value="user">User</option>
              <option value="abandoned">Abandoned</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover mt-4 rounded-lg px-4 py-3 font-bold text-white transition-colors"
          >
            Submit Target
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTargetModal;
