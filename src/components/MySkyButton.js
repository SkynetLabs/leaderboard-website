import { useEffect, useContext, useState, useCallback } from "react";
import { SkynetContext } from "../state/SkynetContext";
import { UserCircleIcon } from "@heroicons/react/outline";

const MySkyButton = () => {
  const { mySky, userProfile, setUserID, profile, setProfile, mySkyLogout } = useContext(SkynetContext);
  const [loggedIn, setLoggedIn] = useState(false); //This will get moved to global state.
  const [loading, setLoading] = useState(true); //This will get moved to global state.

  const handleLoginSuccess = useCallback(async () => {
    setLoggedIn(true);
    mySky.userID().then((userID) => {
      setUserID(userID);
      // console.log("userID: ", userID);
      userProfile.getProfile(userID).then((result) => {
        setProfile(result);
      });
    });
  }, [setLoggedIn, setUserID, setProfile, userProfile, mySky]);

  useEffect(() => {
    // if we have MySky loaded
    setLoading(true);
    setProfile(null);
    if (mySky) {
      mySky.checkLogin().then((result) => {
        if (result) {
          handleLoginSuccess();
        }
        setLoading(false);
      });
    }
  }, [mySky, setProfile, handleLoginSuccess]);

  const onLogin = () => {
    setLoading(true);
    setProfile(null);
    mySky.requestLoginAccess().then((result) => {
      if (result) {
        handleLoginSuccess();
      }
      setLoading(false);
    });
  };

  const onLogout = () => {
    mySkyLogout();
    setLoggedIn(false);
    setProfile(null);
  };

  return (
    <>
      {loading && (
        <button className="group flex items-center px-2 py-2 text-sm font-medium rounded-md nav-link w-full">
          [Spinner]
        </button>
      )}
      {!loading && !loggedIn && (
        <button
          className="group flex items-center px-2 py-2 text-sm font-medium rounded-md nav-link w-full"
          onClick={onLogin}
        >
          <UserCircleIcon className="mr-3 h-6 w-6" aria-hidden="true" />
          MySky Login
        </button>
      )}
      {!loading && loggedIn && (
        <>
          <button
            className="group flex items-center px-2 py-2 text-sm font-medium rounded-md nav-link w-full"
            onClick={onLogout}
          >
            <UserCircleIcon className="mr-3 h-6 w-6" aria-hidden="true" />
            {profile && profile.username ? "Logout: " + profile.username : "MySky Logout"}
          </button>
        </>
      )}
    </>
  );
};

export default MySkyButton;
