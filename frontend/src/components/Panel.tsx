import type { ReactNode } from "react";

const Panel = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <div className="flex h-full flex-col gap-6 p-8">
      <div className="flex gap-4 items-center">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <button className="bg-primary hover:bg-primary-hover rounded-4xl px-6 py-4 text-xl font-bold transition-colors hover:text-white">
          <span className="text-2xl">+  </span> Add New Target
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Panel;
