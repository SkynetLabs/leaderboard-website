import { FireIcon } from "@heroicons/react/solid";
import ordinal from "ordinal";
import React, { useEffect, useState } from "react";
// import { SkynetClient } from "skynet-js";
import SearchBar from "./components/SearchBar";
import RecordList from "./components/RecordList";

// const skynetClient = new SkynetClient();

const endpoint = "content";
const searchLabel = "Search by identifier";
const searchKey = "identifier";
const sortConfig = [
  { name: "Interactions (total)", field: "total" },
  { name: "Interactions (24 hours)", field: "last24H" },
];
const sortByDefault = "total";
const sortDirDefault = "desc";
// const transform = async (data) => {
//   console.log(data);
//   const urls = await Promise.allSettled(data.map(({ identifier }) => identifier));
//   console.log(urls);
//   return data.map((record, index) => ({ ...record, url: urls[index] }));
// };
const render = (record) => {
  return (
    <>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between space-x-8">
          <div className="flex flex-row space-x-4 truncate">
            <div className="flex items-center text-sm text-palette-600 font-semibold">
              <span className="text-gray-400 w-10">{ordinal(record.rank)}</span>
              {record.rank <= 3 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
              {record.rank <= 2 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
              {record.rank <= 1 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
            </div>
            <div className="text-sm text-primary truncate">{record.identifier}</div>
          </div>
          <div className="flex-shrink-0 flex flex-col xl:flex-row text-sm xl:space-x-4 xl:text-right tabular-nums">
            <p>
              {record.total} <span className="text-gray-400 ml-2">total</span>
            </p>
            <p className="xl:w-48">
              {record.last24H} <span className="text-gray-400 ml-2">in last 24h</span>
            </p>
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
    setTitle("Content Leaderboard");
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
      <RecordList
        endpoint={endpoint}
        // transform={transform}
        search={search}
        searchKey={searchKey}
        sortBy={sortBy}
        sortDir={sortDir}
      >
        {render}
      </RecordList>
    </div>
  );
}
