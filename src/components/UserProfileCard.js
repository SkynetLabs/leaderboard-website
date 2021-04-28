import { useEffect, useContext, useState } from "react";
import { SkynetContext } from "../state/SkynetContext";
import useLeaderboardApi from "../useLeaderboardApi";
import { axios } from "axios";

const UserProfileCard = () => {
  const { mySky, userID, profile } = useContext(SkynetContext);
  const [avatar, setAvatar] = useState();
  const [scores, setScores] = useState({ newContentTotal: "-", interactionsTotal: "-" });
  const { data, size, loading } = useLeaderboardApi("users", { search: userID, searchKey: "userPK" });

  const handleSignUp = () => {
    console.log("Do Signup. After signup, we should be able to search and get a hit, even with 0 interactions.");
  };

  useEffect(() => {
    console.log(profile);
    setAvatar(null);
    if (profile) {
      if ("avatar" in profile) {
        const { url } = profile.avatar;
        console.log("avatar", url);

        mySky.connector.client.getSkylinkUrl(url).then((avatarUrl) => {
          setAvatar(avatarUrl);
        });

        fetch("https://siasky.dev/leaderboard/users?userPK=" + userID)
          .then((response) => response.json())
          .then((data) => {
            console.log("fetch", data);
            if (data) {
              setScores(data[0]);
            }
          });
      }
      console.log(data);
      console.log(size);
    }
  }, [profile]);

  return (
    <>
      {userID && profile && (
        <div class="bg-white shadow p-4 rounded w-52 ml-3">
          <div class="text-center mt-4">
            {profile.username && <p class="text-gray-600 font-bold">{profile.username}</p>}
            {(profile.firstName || profile.lastname) && (
              <p class="text-sm font-hairline text-gray-600 mt-1">{profile.firstName + " " + profile.lastName}</p>
            )}
            <p class="text-xs font-hairline text-gray-600 mt-1">{userID.substring(0, 16) + "..."}</p>
          </div>
          {avatar && (
            <div class="flex justify-center mt-4">
              <img class="shadow sm:w-16 sm:h-16 w-16 h-16 rounded-full" src={avatar} alt="Avatar" />
            </div>
          )}
          <div class="mt-6 flex justify-between text-center">
            <div>
              <p class="text-gray-700 font-bold">{scores.interactionsTotal}</p>
              <p class="text-xs mt-2 text-gray-600 font-hairline">Interactions</p>
            </div>
            <div>
              <p class="text-gray-700 font-bold">{scores.newContentTotal}</p>
              <p class="text-xs mt-2 text-gray-600 font-hairline">Creations</p>
            </div>
            {/* <div>
              <p class="text-gray-700 font-bold">{scores.rank}</p>
              <p class="text-xs mt-2 text-gray-700 font-hairline">Rank</p>
            </div> */}
          </div>
          {!loading && !scores && (
            <div class="mt-6">
              <button
                class="rounded shadow-md w-full items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
                onClick={() => handleSignUp()}
              >
                Sign-up
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserProfileCard;
