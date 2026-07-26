import { useState, useEffect } from "react";
import type { Target } from "../types";
import Stats from "./Stats";
import Panel from "./Panel";
import TargetTable from "./TargetTable";
import AddTargetModal from "./AddTargetModal";

const Dashboard = ({
  viewMode,
  title,
}: {
  viewMode: string;
  title: string;
}) => {
  const [targets, setTargets] = useState<Target[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddTarget = async (target: Partial<Target>) => {
    try {
      const response = await fetch(`http://localhost:3000/targets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(target),
      });

      if (response.ok) {
        setError(null);
        const refreshResponse = await fetch("http://localhost:3000/targets");
        const updatedData = await refreshResponse.json();

        setTargets(updatedData);
      } else {
        setError("Failed to add target to database.");
      }
    } catch (error) {
      setError("Failed to connect to database. Is the server running?");
    }
  };

  const handleDeleteTarget = async (id: Target["id"]) => {
    try {
      const response = await fetch(`http://localhost:3000/targets/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setError(null);
        setTargets((targets) => targets.filter((t) => t.id !== id));
      } else {
        setError("Failed to delete target in database.");
      }
    } catch (error) {
      setError("Failed to connect to database. Is the server running?");
    }
  };

  const handleUpdateTarget = async (
    id: Target["id"],
    status: Target["status"],
  ) => {
    try {
      const response = await fetch(`http://localhost:3000/targets/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setError(null);
        setTargets((targets) =>
          targets.map((t) => (t.id === id ? { ...t, status: status } : t)),
        );
      } else {
        setError("Failed to update target on database.");
      }
    } catch (error) {
      setError("Failed to connect to database. Is the server running?");
    }
  };

  useEffect(() => {
    const fetchTargets = async () => {
      try {
        const response = await fetch("http://localhost:3000/targets");
        const data = await response.json();

        setTargets(data);
      } catch (error) {
        setError("Error while communicating with the API. Check logs.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTargets();
  }, []);

  return (
    <>
      <Panel
        title={title}
        onAddClick={
          viewMode === "active" ? () => setIsModalOpen(true) : undefined
        }
      >
        {error && (
          <div className="mb-6 flex shrink-0 items-center justify-between rounded-lg border border-red-500 bg-red-500/10 p-4 text-red-500">
            <span className="font-medium">{error}</span>
            <button
              onClick={() => setError(null)}
              className="text-xl font-bold transition-colors hover:text-white"
            >
              ✕
            </button>
          </div>
        )}
        {isLoading ? (
          <p className="text-text-muted text-2xl">Connecting to database...</p>
        ) : viewMode === "stats" ? (
          <Stats data={targets} />
        ) : (
          <TargetTable
            data={
              viewMode === "active"
                ? targets.filter(
                    (t) => t.status !== "abandoned" && t.status !== "rooted",
                  )
                : targets.filter(
                    (t) => t.status === "abandoned" || t.status === "rooted",
                  )
            }
            onDelete={handleDeleteTarget}
            onUpdate={handleUpdateTarget}
          />
        )}
      </Panel>
      <AddTargetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTarget}
      />
    </>
  );
};

export default Dashboard;
