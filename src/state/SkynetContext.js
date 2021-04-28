import { createContext, useState, useEffect } from "react";
import { SkynetClient } from "skynet-js";

// To import DAC, uncomment here, and 2 spots below.
// import { ContentRecordDAC } from '@skynetlabs/content-record-library';
import { UserProfileDAC } from "@skynethub/userprofile-library";

const SkynetContext = createContext(undefined);

// We'll define a portal to allow for developing on localhost.
// When hosted on a skynet portal, SkynetClient doesn't need any arguments.
const portal = window.location.hostname === "localhost" ? "https://siasky.net" : undefined;

// Initiate the SkynetClient
const client = new SkynetClient(portal);

// For now, we won't use any DACs -- uncomment to create
// const contentRecord = new ContentRecordDAC();
// const contentRecord = null;
const userProfile = new UserProfileDAC();

const dataDomain = window.location.hostname === "localhost" ? "localhost" : "skynet-hackathon.hns";

const SkynetProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [profile, setProfile] = useState(null);
  const [mySky, setMySky] = useState(null);
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

  useEffect(() => {
    // define async setup function
    async function initMySky() {
      try {
        // load invisible iframe and define app's data domain
        // needed for permissions write
        const mySky = await client.loadMySky(dataDomain, {
          debug: true,
          alpha: false,
        });

        // load necessary DACs and permissions
        // Uncomment line below to load DACs
        // await mySky.loadDacs(contentRecord);
        // await mySky.loadDacs(userProfile);

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
  }, []);

  return (
    <SkynetContext.Provider value={{ client, mySky, userProfile, dataDomain, userID, setUserID, profile, setProfile }}>
      {children}
    </SkynetContext.Provider>
  );
};

export { SkynetContext, SkynetProvider };
