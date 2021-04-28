import useLeaderboardApi, { pageSize } from "../../../useLeaderboardApi";
import LoadMoreButton from "./LoadMoreButton";

const ListTemplate = ({ children }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">{children}</ul>
    </div>
  );
};

export default function RecordList({ children, endpoint, transform, search, searchKey, sortBy, sortDir }) {
  const { data, size, setSize, error } = useLeaderboardApi(endpoint, { transform, search, searchKey, sortBy, sortDir });

  // error fetching data, display error message
  if (error) {
    return (
      <ListTemplate>
        <li className="p-4 text-center text-error">Error requesting data: {error.message}</li>
      </ListTemplate>
    );
  }

  // TODO: handle this case better
  if (!data) return null;

  const records = data.flat();

  // no records found, display a message
  if (records.length === 0) {
    return (
      <ListTemplate>
        <li className="p-4 text-center text-palette-300">No records found</li>
      </ListTemplate>
    );
  }

  const noMoreData = data.length && data[data.length - 1].length < pageSize;

  return (
    <div>
      <ListTemplate>
        {records.map((record, index) => (
          <li key={index}>{children(record)}</li>
        ))}
      </ListTemplate>

      <div className="text-center mt-6">
        <LoadMoreButton size={size} setSize={setSize} noMoreData={noMoreData} />
      </div>
    </div>
  );
}
