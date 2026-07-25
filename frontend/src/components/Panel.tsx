import type { ReactNode } from "react";

const Panel = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <div className="flex h-full flex-col gap-6 p-8">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Panel;
