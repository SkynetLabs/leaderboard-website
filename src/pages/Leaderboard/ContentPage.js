import { FireIcon, SearchIcon } from "@heroicons/react/solid";
import ordinal from "ordinal";
import React, { useEffect, useState } from "react";
import useLeaderboardApi from "../../useLeaderboardApi";

const endpoint = "content";
const sortable = [
  { name: "Rank", field: "rank" },
  { name: "Interactions (total)", field: "total" },
  { name: "Interactions (24 hours)", field: "last24H" },
];

const Records = ({ search = "", sortBy = "total", sortDir = "asc" }) => {
  const { data, size, setSize } = useLeaderboardApi(endpoint, { search, sortBy, sortDir });

  if (!data) return null;

  const records = data.flat();

  // useEffect(() => {
  //   if (sortBy && sortDir && size > 1) {
  //     setSize(1);
  //   }
  // }, [sortBy, sortDir]);

  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {records.map((record, index) => (
            <li key={index}>
              {/* <a href="#" className="block hover:bg-gray-50"> */}
              <div className="grid grid-cols-2 gap-4 px-4 py-4 sm:px-6">
                <div className="space-y-4">
                  <div className="text-sm text-primary truncate">{record.skylink}</div>
                  <div className="flex items-center text-sm text-palette-600 font-semibold">
                    <span className="mr-1.5">{ordinal(record.rank)}</span>
                    {record.rank <= 3 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
                    {record.rank <= 2 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
                    {record.rank <= 1 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-palette-600 font-semibold">Interactions</div>
                  <div className="text-sm text-palette-400">Total: {record.total}</div>
                  <div className="text-sm text-palette-400">Last 24 hours: {record.last24H}</div>
                </div>
              </div>
              {/* </a> */}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-6">
        <button
          type="button"
          className="inline-flex items-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          onClick={() => setSize(size + 1)}
        >
          load more
        </button>
      </div>
    </div>
  );
};

const SearchBar = ({ search, setSearch, sortBy, setSortBy, sortDir, setSortDir }) => {
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSortChange = (event) => {
    const [newSortBy, newSortDir] = event.target.value.split(":");

    if (newSortBy !== sortBy) setSortBy(newSortBy);
    if (newSortDir !== sortDir) setSortDir(newSortDir);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative rounded-md shadow-sm w-full md:w-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="search records"
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex flex-row items-center space-y-4 md:space-x-4 md:space-y-0 w-full md:w-auto">
        <label htmlFor="sort" className="hidden md:block text-sm font-medium text-gray-700">
          Sort by
        </label>
        <select
          id="sort"
          name="sort"
          className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md flex-grow md:flex-grow-0"
          onChange={handleSortChange}
          value={`${sortBy}:${sortDir}`}
        >
          {sortable.map(({ field, name }) => (
            <React.Fragment key={field}>
              <option value={`${field}:asc`}>{name} ascending</option>
              <option value={`${field}:desc`}>{name} descending</option>
            </React.Fragment>
          ))}
        </select>
      </div>
    </div>
  );
};

export default function ContentPage({ setTitle }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("rank");
  const [sortDir, setSortDir] = useState("asc");

  useEffect(() => {
    setTitle("Content Leaderboard");
  }, [setTitle]);

  return (
    <div className="space-y-4">
      <SearchBar
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortDir={sortDir}
        setSortDir={setSortDir}
      />
      <Records search={search} sortBy={sortBy} sortDir={sortDir} />
    </div>
  );
}
