import { useState, useContext } from "react";
import { SkynetContext } from "../state/SkynetContext";

// derives an avatar URL from a profile object
// Right now this isn't standardized:
// - if string it's a SkyID skyfile that is a folder, we'll grab 150x150 image
// - if its an object with url that skyfile is the avatar
// - (haven't setup) it matches skystandards, this might be 3rd option
// - else, set avatar to null

export const useAvatar = () => {
  const [avatar, setAvatar] = useState(null);
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
      } else {
        setAvatar(null);
      }
    } else {
      setAvatar(null);
    }
  };

  return [avatar, getAvatar];
};
