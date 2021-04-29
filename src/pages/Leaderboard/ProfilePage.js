import { FireIcon } from "@heroicons/react/solid";
import ordinal from "ordinal";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import RecordList from "./components/RecordList";

const endpoint = "users";
const searchLabel = "Search by user public key";
const searchKey = "userPK";
const sortConfig = [
  { name: "Content creation (total)", field: "newContentTotal" },
  { name: "Content creation (24 hours)", field: "newContentLast24H" },
  { name: "Interactions (total)", field: "interactionsTotal" },
  { name: "Interactions (24 hours)", field: "interactionsLast24H" },
];
const sortByDefault = "newContentTotal";
const sortDirDefault = "desc";
const render = (record) => {
  return (
    <>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between space-x-8">
          <div className="flex flex-row space-x-4 truncate">
            <div className="flex items-center text-sm text-palette-600 font-semibold">
              <span className="text-gray-400 sm:w-10">{ordinal(record.rank)}</span>
              <span className="hidden sm:flex">
                {record.rank <= 3 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
                {record.rank <= 2 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
                {record.rank <= 1 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
              </span>
            </div>
            <div className="text-sm truncate">{record.userPK}</div>
          </div>
          <div className="flex flex-row space-x-8 flex-shrink-0">
            <div className="flex-shrink-0 flex flex-col text-sm tabular-nums">
              <p className="text-palette-400">Interactions</p>
              <p>
                {record.interactionsTotal} <span className="text-palette-300 ml-2">total</span>
              </p>
              <p className="xl:w-48">
                {record.interactionsLast24H} <span className="text-palette-300 ml-2">in last 24h</span>
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col text-sm tabular-nums">
              <p className="text-palette-400">Content creation</p>
              <p>
                {record.newContentTotal} <span className="text-palette-300 ml-2">total</span>
              </p>
              <p className="xl:w-48">
                {record.newContentLast24H} <span className="text-palette-300 ml-2">in last 24h</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ContentPage({ setTitle }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(sortByDefault);
  const [sortDir, setSortDir] = useState(sortDirDefault);

  useEffect(() => {
    setTitle("Users Leaderboard");
  }, [setTitle]);

  return (
    <div className="space-y-4">
      <SearchBar
        sortConfig={sortConfig}
        searchLabel={searchLabel}
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortDir={sortDir}
        setSortDir={setSortDir}
      />
      <RecordList endpoint={endpoint} search={search} searchKey={searchKey} sortBy={sortBy} sortDir={sortDir}>
        {render}
      </RecordList>
    </div>
  );
}
