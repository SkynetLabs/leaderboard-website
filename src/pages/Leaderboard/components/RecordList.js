import useLeaderboardApi, { pageSize } from "../../../useLeaderboardApi";
import LoadMoreButton from "./LoadMoreButton";

export default function RecordList({ children, endpoint, transform, search, searchKey, sortBy, sortDir }) {
  const { data, size, setSize } = useLeaderboardApi(endpoint, { transform, search, searchKey, sortBy, sortDir });

  if (!data) return null;

  const noMoreData = data.length && data[data.length - 1].length < pageSize;

  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {data.flat().map((record, index) => (
            <li key={index}>{children(record)}</li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-6">
        <LoadMoreButton size={size} setSize={setSize} noMoreData={noMoreData} />
      </div>
    </div>
  );
}
