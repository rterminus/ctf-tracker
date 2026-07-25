import type { Target } from "../types";

const Stats = ({ data }: { data: Target[] }) => {
  const totalTargets = data.length;
  const rootedCount = data.filter((t) => t.status === "rooted").length;
  const reconCount = data.filter((t) => t.status === "recon").length;
  const abandonedCount = data.filter((t) => t.status === "abandoned").length;

  return (
    <div className="grid h-full grid-cols-2 gap-6">
      {/* Card 1: Total */}
      <div className="border-outline bg-background flex flex-col items-center justify-center rounded-xl border p-8">
        <h3 className="text-text-muted text-xl font-bold">Total Targets</h3>
        <span className="mt-4 font-mono text-6xl text-white">
          {totalTargets}
        </span>
      </div>

      {/* Card 2: Rooted */}
      <div className="border-outline bg-background flex flex-col items-center justify-center rounded-xl border p-8">
        <h3 className="text-text-muted text-xl font-bold">Systems Rooted</h3>
        <span className="mt-4 font-mono text-6xl text-green-500">
          {rootedCount}
        </span>
      </div>

      {/* Card 3: Recon */}
      <div className="border-outline bg-background flex flex-col items-center justify-center rounded-xl border p-8">
        <h3 className="text-text-muted text-xl font-bold">Active Recon</h3>
        <span className="mt-4 font-mono text-6xl text-blue-500">
          {reconCount}
        </span>
      </div>

      {/* Card 4: Abandoned */}
      <div className="border-outline bg-background flex flex-col items-center justify-center rounded-xl border p-8">
        <h3 className="text-text-muted text-xl font-bold">Abandoned</h3>
        <span className="mt-4 font-mono text-6xl text-red-500">
          {abandonedCount}
        </span>
      </div>
    </div>
  );
};

export default Stats;
