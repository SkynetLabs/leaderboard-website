import { useEffect, useContext, useState, useCallback } from "react";
import { SkynetContext } from "../state/SkynetContext";
import { UserCircleIcon } from "@heroicons/react/outline";
import { ReactComponent as Spinner } from "../svg/Spinner.svg";

const MySkyButton = () => {
  const { mySky, userProfile, setUserID, profile, setProfile, mySkyLogout } = useContext(SkynetContext);
  const [loggedIn, setLoggedIn] = useState(false); //This will get moved to global state.
  let [loading, setLoading] = useState(true); //This will get moved to global state.

  const handleLoginSuccess = useCallback(async () => {
    setLoggedIn(true);
    mySky.userID().then((userID) => {
      setUserID(userID);
      console.log("userID: ", userID);
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

  const classes =
    "group flex flex-grow items-center px-3 py-2 text-sm font-medium text-palette-200 rounded-md hover:text-palette-100 hover:bg-palette-400";

  return (
    <>
      {loading && (
        <button className={classes}>
          <Spinner className="mr-4 h-6 w-6" aria-hidden="true" /> Loading mySky
        </button>
      )}
      {!loading && !loggedIn && (
        <button className={classes} onClick={onLogin}>
          <UserCircleIcon className="mr-4 h-6 w-6" aria-hidden="true" />
          MySky Login
        </button>
      )}
      {!loading && loggedIn && (
        <button className={classes} onClick={onLogout}>
          <UserCircleIcon className="mr-4 h-6 w-6" aria-hidden="true" />
          {profile && profile.username ? "Logout: " + profile.username : "MySky Logout"}
        </button>
      )}
    </>
  );
};

export default MySkyButton;
