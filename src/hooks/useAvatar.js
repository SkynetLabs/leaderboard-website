import { useState, useContext } from "react";
import { SkynetClient } from "skynet-js";
import { SkynetContext } from "../state/SkynetContext";

// derives an avatar URL from a profile object
// Right now this isn't standardized:
// - if string it's a SkyID skyfile that is a folder, we'll grab 150x150 image
// - if its an object with url that skyfile is the avatar
// - if it's an object with array
// - (haven't setup) it matches skystandards, this might be 3rd option
// - else, set avatar to null

export const useAvatar = () => {
  const [avatar, setAvatar] = useState("");
  const { client } = useContext(SkynetContext);

  const getAvatar = async (profile) => {
    if ("avatar" in profile) {
      if (typeof profile.avatar === "string") {
        client.getSkylinkUrl(profile.avatar).then((avatarUrl) => {
          setAvatar(avatarUrl + "/150");
        });
      } else if ("url" in profile.avatar) {
        client.getSkylinkUrl(profile.avatar.url).then((avatarUrl) => {
          setAvatar(avatarUrl);
        });
      } else if (profile.avatar[0]) {
        client.getSkylinkUrl(profile.avatar[0].url).then((avatarUrl) => {
          setAvatar(avatarUrl);
        });
      } else {
        setAvatar(null);
      }
    } else {
      setAvatar(null);
    }
  };

  const resetAvatar = () => {
    setAvatar("");
  };

  return [avatar, getAvatar, resetAvatar];
};

export const returnAvatar = async (profile) => {
  const client = new SkynetClient("https://siasky.net");

  if ("avatar" in profile) {
    if (typeof profile.avatar === "string") {
      client.getSkylinkUrl(profile.avatar).then((avatarUrl) => {
        return avatarUrl + "/150";
      });
    } else if ("url" in profile.avatar) {
      client.getSkylinkUrl(profile.avatar.url).then((avatarUrl) => {
        return avatarUrl;
      });
    } else if (profile.avatar[0]) {
      client.getSkylinkUrl(profile.avatar[0].url).then((avatarUrl) => {
        return avatarUrl;
      });
    } else {
      return null;
    }
  } else {
    return null;
  }
};
