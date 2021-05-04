import { FireIcon } from "@heroicons/react/solid";
import ordinal from "ordinal";
import React, { useEffect, useState } from "react";
import { SkynetClient, getFullDomainUrlForPortal } from "skynet-js";
import SearchBar from "./components/SearchBar";
import RecordList from "./components/RecordList";
import Link from "../../components/Link";
import { skappNames } from "../../hooks/skappNames";

const skynetClient = new SkynetClient("https://siasky.net/");

const endpoint = "skapps";
const searchLabel = "Search by skapp name";
const searchKey = "skapp";
const sortConfig = [
  { name: "Interactions (total)", field: "total" },
  { name: "Interactions (24 hours)", field: "last24H" },
];
const sortByDefault = "total";
const sortDirDefault = "desc";
const transform = async (data) => {
  // return data;

  // const urls = await Promise.allSettled(
  //   data.map(({ skapp }) => skynetClient.getSkylinkUrl(skapp, { subdomain: true }))
  // );

  // console.log(urls);
  let modified = await Promise.allSettled(
    data.map((record, index) => {
      let hidden = false;
      let name = undefined;
      // let link = undefined;
      let link = getFullDomainUrlForPortal("https://siasky.net", record.skapp);
      if (skappNames[record.skapp]) {
        const r = skappNames[record.skapp];
        hidden = r.hidden ? true : false;
        name = r.name ? r.name : undefined;
      }
      return { ...record, hidden, name, link };
    })
  );

  modified = modified.map((record, index) => {
    return record.value;
  });

  modified = modified.filter((record, index) => {
    return !record.hidden;
  });

  console.log(modified);

  return modified;
};

const render = (record, pos) => {
  let { link, skapp, total, last24H, hidden, name } = record;

  const displayName = name ? name : skapp;
  // let hidden = false;

  // if (skappNames && skappNames[skapp]) {
  //   // console.log(skappNames[skapp]);
  //   const replacements = skappNames[skapp];
  //   skapp = replacements.name ? replacements.name : skapp;
  //   // hidden = replacements.hidden ? replacements.hidden : false;
  // }

  return (
    <>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between space-x-8">
          <div className="flex flex-row space-x-4 truncate">
            <div className="flex items-center text-sm text-palette-600 font-semibold">
              <span className="text-gray-400 w-10">{ordinal(pos)}</span>
              {pos <= 3 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
              {pos <= 2 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
              {pos <= 1 && <FireIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />}
            </div>
            <div className="text-sm truncate">{link ? <Link href={link}>{displayName}</Link> : displayName}</div>
          </div>
          <div className="flex-shrink-0 flex flex-col xl:flex-row text-sm xl:space-x-4 xl:text-right tabular-nums">
            <p>
              {total} <span className="text-gray-400 ml-2">total</span>
            </p>
            <p className="xl:w-48">
              {last24H} <span className="text-gray-400 ml-2">in last 24h</span>
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
    setTitle("Skapps Leaderboard");
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
