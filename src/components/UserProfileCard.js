import { useEffect, useContext, useState } from "react";
import { SkynetContext } from "../state/SkynetContext";
import { useAvatar } from "../hooks/useAvatar";
import { useScores } from "../hooks/useScores";
import AvatarIcon from "./AvatarIcon";

const newSignup = false;

const UserProfileCard = () => {
  const { userID, profile } = useContext(SkynetContext);
  const [loading, setLoading] = useState(true);
  const [avatar, getAvatar] = useAvatar();
  const [scores, getScores, resetScores] = useScores();

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
  }, [profile, getAvatar, getScores, userID]);

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
              <AvatarIcon avatar={avatar} />
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
            </div>
          )}
          {!loading && !scores && (
            <div className="mt-6">
              {newSignup && (
                <button
                  className="rounded shadow-md w-full items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
                  onClick={() => handleSignUp()}
                >
                  This shouldn't happen.
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
