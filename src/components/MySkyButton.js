import { useEffect, useContext, useState, useCallback } from "react";
// import { Button, Icon, Loader } from 'semantic-ui-react';
// import { useStoreState, useStoreActions, useStore } from 'easy-peasy';
import { SkynetContext } from "../state/SkynetContext";
import { UserCircleIcon } from "@heroicons/react/outline";

const MySkyButton = () => {
  const { mySky, userProfile } = useContext(SkynetContext);
  const [loggedIn, setLoggedIn] = useState(false); //This will get moved to global state.
  const [loading, setLoading] = useState(true); //This will get moved to global state.
  const [profile, setProfile] = useState();
  const [avatar, setAvatar] = useState();
  const [userID, setUserID] = useState();
  // const { fetchUserID, logout } = useStoreActions((state) => state.mySky);
  // const { loggedIn } = useStoreState((state) => state.mySky);
  // const { store } = useStore();

  console.log(userID);

  const handleLoginSuccess = useCallback(async () => {
    setLoggedIn(true);
    mySky.userID().then((userID) => {
      setUserID(userID);
      userProfile.getProfile(userID).then((result) => {
        console.log("profile", result);
        setProfile(result);
      });
    });
  }, [setLoggedIn, setUserID, setProfile, userProfile, mySky]);

  useEffect(() => {
    // if we have MySky loaded
    setLoading(true);
    setAvatar(null);
    setProfile(null);
    if (mySky) {
      mySky.checkLogin().then((result) => {
        if (result) {
          handleLoginSuccess();
        }
        setLoading(false);
      });
    }
  }, [mySky, handleLoginSuccess]);

  useEffect(() => {
    if (profile && mySky?.connector?.client) {
      const skylink = profile.avatar;
      mySky.connector.client.getSkylinkUrl(skylink).then((avatarUrl) => {
        setAvatar(avatarUrl + "/300");
      });
    }
  }, [profile, mySky?.connector?.client]);

  const onLogin = () => {
    setLoading(true);
    setAvatar(null);
    setProfile(null);
    mySky.requestLoginAccess().then((result) => {
      if (result) {
        handleLoginSuccess();
      }
      setLoading(false);
    });
  };

  const onLogout = () => {
    mySky.logout();
    setLoggedIn(false);
  };

  return (
    <>
      {loading && (
        <button className="group flex items-center px-2 py-2 text-sm font-medium rounded-md nav-link">[Spinner]</button>
      )}
      {!loading && !loggedIn && (
        <button className="group flex items-center px-2 py-2 text-sm font-medium rounded-md nav-link" onClick={onLogin}>
          <UserCircleIcon className="mr-3 h-6 w-6" aria-hidden="true" />
          MySky Login
        </button>
      )}
      {!loading && loggedIn && (
        <>
          <button
            className="group flex items-center px-2 py-2 text-sm font-medium rounded-md nav-link"
            onClick={onLogout}
          >
            <UserCircleIcon className="mr-3 h-6 w-6" aria-hidden="true" />
            {profile ? "Logout: " + profile.username : "MySky Logout"}
          </button>
          <img alt="Avatar" src={avatar} />
        </>
      )}
    </>
  );
};

export default MySkyButton;

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
