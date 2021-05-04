import { useEffect, useContext, useState } from "react";
import { SkynetContext } from "../state/SkynetContext";
import { useAvatar } from "../hooks/useAvatar";
import { useScores } from "../hooks/useScores";

// // Example profile object converted from SkyID profile:
// {
//   "version": 1,
//   "username": "dghelm",
//   "aboutMe": "Developer Evangelist for Skynet Labs.",
//   "location": "Oklahoma City, OK, USA",
//   "topics": [],
//   "avatar": "jADT7g5u7GRJ7YfSoFGeWozCkJF2eJrJSeq9mZeu4LCiXg"
// }

// Avatar is a folder with various size images named: ["50","150","300","600","1920"]
// If original image size is smaller than name's dimensions, the size actually the original upload size, despite the file's name.

const UserProfileCard = () => {
  const { userID, profile } = useContext(SkynetContext);
  const [loading, setLoading] = useState(true);
  const [avatar, getAvatar] = useAvatar();
  const [scores, newSignup, getScores, resetScores] = useScores();

  const handleSignUp = () => {
    console.log("Do Signup. After signup, we should be able to search and get a hit, even with 0 interactions.");
  };

  useEffect(() => {
    setLoading(true);
    resetScores();
    if (profile) {
      getAvatar(profile);
      getScores(userID);
    }
    setLoading(false);
  }, [profile]);

  return (
    <>
      {userID && profile && (
        <div className="bg-white shadow p-4 rounded w-full">
          <div className="text-center mt-4">
            {profile.username && <p className="text-gray-600 font-bold">{profile.username}</p>}
            {(profile.firstName || profile.lastname) && (
              <p className="text-sm font-hairline text-gray-600 mt-1">{profile.firstName + " " + profile.lastName}</p>
            )}
            <p className="text-xs font-hairline text-gray-600 mt-1">{userID.substring(0, 16) + "..."}</p>
          </div>
          {avatar && (
            <div className="flex justify-center mt-4">
              <img className="shadow sm:w-16 sm:h-16 w-16 h-16 rounded-full" src={avatar} alt="Avatar" />
            </div>
          )}
          {scores && (
            <div className="mt-6 flex justify-between text-center">
              <div>
                <p className="text-gray-700 font-bold">{scores.interactionsTotal}</p>
                <p className="text-xs mt-2 text-gray-600 font-hairline">Interactions</p>
              </div>
              <div>
                <p className="text-gray-700 font-bold">{scores.newContentTotal}</p>
                <p className="text-xs mt-2 text-gray-600 font-hairline">Creations</p>
              </div>
              {/* <div>
              <p class="text-gray-700 font-bold">{scores.rank}</p>
              <p class="text-xs mt-2 text-gray-700 font-hairline">Rank</p>
            </div> */}
            </div>
          )}
          {!loading && !scores && (
            <div className="mt-6">
              {newSignup && (
                <button
                  className="rounded shadow-md w-full items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
                  onClick={() => handleSignUp()}
                >
                  Sign-up
                </button>
              )}
              {!newSignup && (
                <button
                  className="rounded shadow-md w-full items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
                  onClick={() => handleSignUp()}
                >
                  This state shouldnt happen right?
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserProfileCard;
