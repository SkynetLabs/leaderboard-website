import { useEffect, useContext, useState, useCallback } from "react";
import { SkynetContext } from "../state/SkynetContext";
import { UserCircleIcon } from "@heroicons/react/outline";
import { ReactComponent as Spinner } from "../svg/Spinner.svg";
import classnames from "classnames";

const MySkyButton = () => {
  const { mySky, userID, setUserID, profile, setProfile, mySkyLogout } = useContext(SkynetContext);
  let [loading, setLoading] = useState(true); //This will get moved to global state.

  const handleLoginSuccess = useCallback(async () => {
    mySky.userID().then((userID) => {
      setUserID(userID);
    });
  }, [setUserID, mySky]);

  useEffect(() => {
    // if we have MySky loaded
    setLoading(true);
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
    mySky.requestLoginAccess().then((result) => {
      if (result) {
        handleLoginSuccess();
      }
      setLoading(false);
    });
  };

  const onLogout = () => {
    mySkyLogout();
  };

  const classes = "group flex flex-grow items-center px-3 py-2 text-sm font-medium text-palette-200 rounded-md";
  const clickableClasses = "hover:text-palette-100 hover:bg-palette-400";

  return (
    <>
      {loading && (
        <button className={classnames(classes, "cursor-auto")} disabled={true}>
          <Spinner className="mr-4 h-6 w-6" aria-hidden="true" /> Loading MySky
        </button>
      )}
      {!loading && !userID && (
        <button className={classnames(classes, clickableClasses)} onClick={onLogin}>
          <UserCircleIcon className="mr-4 h-6 w-6" aria-hidden="true" />
          MySky Login
        </button>
      )}
      {!loading && userID && (
        <button className={classnames(classes, clickableClasses)} onClick={onLogout}>
          <UserCircleIcon className="mr-4 h-6 w-6" aria-hidden="true" />
          {profile && profile.username ? "Logout: " + profile.username : "MySky Logout"}
        </button>
      )}
    </>
  );
};

export default MySkyButton;
