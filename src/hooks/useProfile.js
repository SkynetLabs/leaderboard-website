import { useState, useEffect } from "react";
import { useAvatar } from "./useAvatar";
import { useScores } from "./useScores";

const emptyScores = {
  interactionsLast24H: null,
  interactionsTotal: null,
  newContentLast24H: null,
  newContentTotal: null,
  rank: null,
  userPK: "",
};

export const useProfile = () => {
  const [scores, getScores] = useScores();
  const [avatar, getAvatar, resetAvatar] = useAvatar();

  const [singleUserProfile, setSingleUserProfile] = useState({});
  const [singleUserScores, setSingleUserScores] = useState(emptyScores);

  const getSingleUserProfile = (id) => {
    resetAvatar();
    setSingleUserProfile({});
    setSingleUserScores(emptyScores);
    getScores(id);
  };

  useEffect(() => {
    if (scores) {
      // grab scores for return
      const {
        interactionsLast24H,
        interactionsTotal,
        newContentLast24H,
        newContentTotal,
        rank,
        userPK,
        userMetadata,
      } = scores;

      // return non-metadata info
      setSingleUserScores({ interactionsLast24H, interactionsTotal, newContentLast24H, newContentTotal, rank, userPK });

      // grab profile for return
      if (userMetadata.mySkyProfile) {
        const { profile } = userMetadata.mySkyProfile;
        getAvatar(profile);
        setSingleUserProfile(profile);
      }
    }
  }, [scores, getAvatar]);

  return [singleUserProfile, singleUserScores, avatar, getSingleUserProfile];
};
