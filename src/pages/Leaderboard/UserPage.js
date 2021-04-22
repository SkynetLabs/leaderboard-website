import { FireIcon } from "@heroicons/react/solid";
import ordinal from "ordinal";
import { useEffect } from "react";
import useApi from "../../useApi";

export default function UserPage({ setTitle }) {
  const { data: records } = useApi("/users");

  useEffect(() => {
    setTitle("Users Leaderboard");
  }, [setTitle]);

  if (!records) return null;

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {records.map((record) => (
          <li key={record.rank}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 py-4 sm:px-6">
              <div>
                <div className="flex items-center text-sm text-palette-600 font-semibold">
                  <span className="mr-1.5">{ordinal(record.rank)}</span>
                  {record.rank <= 3 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
                  {record.rank <= 2 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
                  {record.rank <= 1 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
                </div>
              </div>
              <div>
                <div className="text-sm text-palette-600 font-semibold">Interactions</div>
                <div className="text-sm text-palette-400">Total: {record.interactionsTotal}</div>
                <div className="text-sm text-palette-400">Last 24 hours: {record.interactionsLast24H}</div>
              </div>
              <div>
                <div className="text-sm text-palette-600 font-semibold">New content</div>
                <div className="text-sm text-palette-400">Total: {record.newContentTotal}</div>
                <div className="text-sm text-palette-400">Last 24 hours: {record.newContentLast24H}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
