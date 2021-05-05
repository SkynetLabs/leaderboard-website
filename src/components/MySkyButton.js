import { useEffect, useContext, useState, useCallback } from "react";
// import { Button, Icon, Loader } from 'semantic-ui-react';
// import { useStoreState, useStoreActions, useStore } from 'easy-peasy';
import { SkynetContext } from "../state/SkynetContext";
import { UserCircleIcon } from "@heroicons/react/outline";
import { deriveDiscoverableTweak } from "skynet-js/dist/mjs/mysky/tweak";
import { setEntry } from "skynet-js/dist/cjs/registry";
import { extractOptions } from "skynet-js/dist/cjs/utils/options";
import { defaultSetEntryOptions } from "skynet-js/dist/cjs/registry";
import { genKeyPairFromSeed } from "skynet-js";
import { uint8ArrayToStringUtf8, hexToUint8Array } from "skynet-js/dist/mjs/utils/string";

const MySkyButton = () => {
  const { mySky, userProfile, userID, setUserID, profile, setProfile, mySkyLogout } = useContext(SkynetContext);
  const [loggedIn, setLoggedIn] = useState(false); //This will get moved to global state.
  const [loading, setLoading] = useState(true); //This will get moved to global state.

  const handleLoginSuccess = useCallback(async () => {
    // const skylinkTests = async (userID) => {
    //   const path = "skyuser.hns/skyprofile.hns/userprofile.json";
    //   // const path = "localhost/testEntry";
    //   // mySky.getJSON(path).then((r) => {
    //   //   console.log("getJSON", r);
    //   // });
    //   // mySky.getEntryLink(path).then((r) => {
    //   //   console.log("entryLink", r);
    //   // });

    //   const { publicKey, privateKey } = genKeyPairFromSeed("1234");

    //   const dataKey = deriveDiscoverableTweak(path);
    //   //hex of AABDo7H_syQIYPSkXg1JTd6Vhp2tIEP2CHgO9FJPZTalRQ
    //   const data = hexToUint8Array("000043a3b1ffb3240860f4a45e0d494dde95869dad2043f608780ef4524f6536a545");
    //   const revision = 2n;

    //   const entry = { dataKey, data, revision };
    //   console.log("entry", entry);

    //   // const sig = await mySky.signRegistryEntry(entry, path);
    //   // console.log("sig", sig);

    //   mySky.connector.client.registry.getEntryUrl(publicKey, dataKey, { hashedDataKeyHex: true }).then((r) => {
    //     console.log("url", r);
    //   });

    //   await mySky.connector.client.registry.setEntry(privateKey, entry, { hashedDataKeyHex: true });

    //   // mySky.connector.client.registry.postSignedEntry(userID, entry, sig);

    //   // mySky.userID({ legacyAppID: "skyfeed" }).then((r) => {
    //   //   console.log("legacy id skyfeed", r);
    //   // });
    //   console.log(userID);
    // };

    setLoggedIn(true);
    mySky.userID().then((userID) => {
      setUserID(userID);
      console.log("userID: ", userID);
      userProfile.getProfile(userID).then((result) => {
        setProfile(result);
      });
      // skylinkTests(userID);
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
  }, [mySky, handleLoginSuccess]);

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
