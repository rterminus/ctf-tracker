import { useState, useEffect } from "react";
import type { Target } from "../types";
import Panel from "./Panel";
import TargetTable from "./TargetTable";

const Dashboard = ({
  viewMode,
  title,
}: {
  viewMode: string;
  title: string;
}) => {
  const [targets, setTargets] = useState<Target[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = async (id: Target["id"]) => {
    try {
      const response = await fetch(`http://localhost:3000/targets/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setTargets((targets) => targets.filter((t) => t.id !== id));
      } else {
        console.error("Failed to delete target in server.");
      }
    } catch (error) {
      console.error("Could not connect to database.", error);
    }
  };

  useEffect(() => {
    const fetchTargets = async () => {
      try {
        const response = await fetch("http://localhost:3000/targets");
        const data = await response.json();

        setTargets(data);
      } catch (error) {
        console.error("Error while communicating with the API: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTargets();
  }, []);

  return (
    <Panel title={title}>
      {isLoading ? (
        <p className="text-text-muted text-2xl">Connecting to database...</p>
      ) : (
        <TargetTable
          data={
            viewMode === "active"
              ? targets.filter((t) => t.status !== "abandoned")
              : targets.filter((t) => t.status === "abandoned")
          }
          onDelete={handleDelete}
        />
      )}
    </Panel>
  );
};

export default Dashboard;
