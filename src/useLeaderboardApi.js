import { useSWRInfinite } from "swr";

const api = process.env.REACT_APP_API_URL || "https://siasky.dev/leaderboard";
const pageSize = 5;
const createQueryString = (attributes) => {
  return attributes.reduce((acc, [key, value = null]) => {
    if (value === null) return acc;
    return [acc, `${key}=${value}`].filter(Boolean).join("&");
  }, "");
};

const getKey = (endpoint, { search, sortBy, sortDir }) => (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end

  const queryString = createQueryString([
    ["skip", pageIndex * pageSize],
    ["limit", pageSize],
    ["sortBy", sortBy],
    ["sortDir", sortDir],
    ["search", search],
  ]);

  return `${api}/${endpoint}?${queryString}`;
};

export default function useLeaderboardApi(endpoint, { search, sortBy, sortDir }) {
  return useSWRInfinite(getKey(endpoint, { search, sortBy, sortDir }));
}
