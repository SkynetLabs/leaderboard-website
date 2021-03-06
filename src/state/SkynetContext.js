import { createContext, useState, useEffect } from "react";
import { SkynetClient } from "skynet-js";

// To import DAC, uncomment here, and 2 spots below.
// import { ContentRecordDAC } from '@skynetlabs/content-record-library';
import { UserProfileDAC } from "@skynethub/userprofile-library";
// import { SocialDAC } from "social-dac-library";

const SkynetContext = createContext(undefined);

// We'll define a portal to allow for developing on localhost.
// When hosted on a skynet portal, SkynetClient doesn't need any arguments.
const portal = window.location.hostname === "localhost" ? "https://siasky.net" : undefined;

// Initiate the SkynetClient
export const client = new SkynetClient(portal);

// For now, we won't use any DACs -- uncomment to create
// const contentRecord = new ContentRecordDAC();
// const contentRecord = null;
const userProfile = new UserProfileDAC();
// const socialDAC = new SocialDAC();
const socialDAC = null;

const dataDomain = window.location.hostname === "localhost" ? "localhost" : "skynet-hackathon.hns";

const SkynetProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [profile, setProfile] = useState(null);
  const [mySky, setMySky] = useState(null);
  const [socialList, setSocialList] = useState([]);
  // const [skynetState, setSkynetState] = useState({
  //   client,
  //   mySky: null,
  //   // contentRecord,
  //   userProfile,
  //   dataDomain,
  //   userID,
  //   setUserID,
  //   profile,
  //   setProfile,
  // });

  // useEffect(() => {
  //   const getSocialList = async () => {
  //     // const list = socialDAC.getFollowingForUser(userID);
  //     // setSocialList(list);
  //   };

  //   // const getProfile = async () => {
  //   // };

  //   if (userID && mySky) {
  //     // getProfile();
  //     getSocialList();
  //   } else {
  //     setSocialList([]);
  //     setProfile(null);
  //   }
  // }, [userID, mySky]);
  useEffect(() => {
    if (userID) {
      userProfile.getProfile(userID).then((result) => {
        setProfile(result);
      });
    } else {
      setProfile(null);
    }
  }, [userID]);

  const refreshUser = () => {
    if (userID) {
      userProfile.getProfile(userID).then((result) => {
        setProfile(result);
      });
    } else {
      setProfile(null);
    }
  };

  useEffect(() => {
    window.addEventListener("focus", refreshUser);
    return () => {
      window.removeEventListener("focus", refreshUser);
    };
  });

  useEffect(() => {
    // define async setup function
    async function initMySky() {
      try {
        // load invisible iframe and define app's data domain
        // needed for permissions write
        const mySky = await client.loadMySky(dataDomain, {
          // debug: true,
          // alpha: true,
        });

        // load necessary DACs and permissions
        // Uncomment line below to load DACs
        // await mySky.loadDacs(contentRecord);
        await mySky.loadDacs(userProfile);
        // await mySky.loadDacs(userProfile, socialDAC);

        // replace mySky in state object
        // setSkynetState({ ...skynetState, mySky, userProfile });
        setMySky(mySky);
      } catch (e) {
        console.error(e);
      }
    }

    // call async setup function
    if (!mySky) {
      initMySky();
    }

    return () => {
      if (mySky) {
        mySky.destroy();
        setMySky(null);
      }
    };
  }, [mySky]);

  const mySkyLogout = () => {
    mySky.logout();
    setUserID("");
    setProfile(null);
    setSocialList([]);
  };

  return (
    <SkynetContext.Provider
      value={{
        client,
        mySky,
        userProfile,
        socialDAC,
        dataDomain,
        userID,
        setUserID,
        profile,
        setProfile,
        socialList,
        setSocialList,
        mySkyLogout,
      }}
    >
      {children}
    </SkynetContext.Provider>
  );
};

export { SkynetContext, SkynetProvider };
