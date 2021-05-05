import { FireIcon } from "@heroicons/react/solid";
import ordinal from "ordinal";
import React, { useEffect, useState } from "react";
import { SkynetClient, getFullDomainUrlForPortal } from "skynet-js";
import SearchBar from "./components/SearchBar";
import RecordList from "./components/RecordList";
import Link from "../../components/Link";
import { skappNames } from "../../hooks/skappNames";

const skynetClient = new SkynetClient(process.env.REACT_APP_PORTAL_URL);

const endpoint = "content";
const searchLabel = "Search by identifier";
const searchKey = "identifier";
const sortConfig = [
  { name: "Interactions (total)", field: "total" },
  { name: "Interactions (24 hours)", field: "last24H" },
];
const sortByDefault = "total";
const sortDirDefault = "desc";
const transform = async (data) => {
  let modified = await Promise.allSettled(
    data.map(async (record, index) => {
      let hidden = false;
      let url = undefined;
      let fileType = undefined;
      let skappName = undefined;
      let skappUrl = undefined;

      if (record.link) {
        url = getFullDomainUrlForPortal("https://siasky.net", record.skapp);
        let hash = record.link.substring(record.link.indexOf("#") + 1);
        url = hash ? url + "#" + hash : url;
      } else {
        url = await skynetClient.getSkylinkUrl(record.identifier, { subdomain: true });
      }
      if (record.metadata) {
        fileType = record.metadata.contentType;
      }

      if (skappNames[record.skapp]) {
        skappName = skappNames[record.skapp].name;
        skappUrl = getFullDomainUrlForPortal("https://siasky.net", record.skapp);
      }

      return { ...record, hidden, url, fileType, skappName, skappUrl };
    })
  );

  modified = modified.map((record, index) => {
    return record.value;
  });

  modified = modified.filter((record, index) => {
    return !record.hidden;
  });

  return modified;
};
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
            <div className="text-sm truncate">
              {record.url ? <Link href={record.url}>{record.identifier}</Link> : record.identifier}
            </div>
          </div>
          <div className="flex-shrink-0 flex flex-col xl:flex-row text-sm xl:space-x-4 xl:text-right tabular-nums">
            {record.fileType && (
              <span className="text-xs inline-flex items-center font-normal leading-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                {record.fileType}
              </span>
            )}
            {record.skappName && (
              <span className="text-xs inline-flex items-center font-normal leading-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">
                {record.skappUrl ? (
                  <Link className="text-green-700" href={record.skappUrl}>
                    {record.skappName}
                  </Link>
                ) : (
                  record.skappName
                )}
              </span>
            )}
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
        transform={transform}
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
