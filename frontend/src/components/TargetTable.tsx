import type { Target } from "../types";

const TargetTable = ({
  data,
  onDelete,
  onUpdate,
}: {
  data: Target[];
  onDelete: (id: Target["id"]) => void;
  onUpdate: (id: Target["id"], status: Target["status"]) => void;
}) => {
  return (
    <div className="max-h-96 overflow-y-auto">
      <table className="w-full text-left">
        <thead className="border-outline text-text-muted border-b">
          <tr>
            <th className="p-3" scope="col">
              IP
            </th>
            <th className="p-3" scope="col">
              Name
            </th>
            <th className="p-3" scope="col">
              Status
            </th>
            <th className="p-3" scope="col">
              Created At
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr
              key={i.id}
              className="border-outline hover:bg-outline border-b transition-colors"
            >
              <th scope="row" className="p-3 font-mono">
                {i.ip}
              </th>
              <td className="p-3">{i.name}</td>
              <td className="p-3">
                <select
                  value={i.status}
                  onChange={(e) =>
                    onUpdate(i.id, e.target.value as Target["status"])
                  }
                  className="bg-background border-outline text-text-muted rounded-lg border p-2 transition-colors hover:text-white focus:outline-none"
                >
                  <option value="rooted">Rooted</option>
                  <option value="user">User</option>
                  <option value="recon">Recon</option>
                  <option value="abandoned">Abandoned</option>
                </select>
              </td>
              <td className="p-3">{i.created_at}</td>
              <td>
                <button
                  onClick={() => onDelete(i.id)}
                  className="my-2 rounded-2xl bg-red-500 px-6 py-2 transition-colors hover:bg-red-400 hover:text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TargetTable;
