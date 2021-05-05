import { useState, useContext } from "react";

// Call API and get the scores for a specfic UserID

export const useScores = () => {
  const [scores, setScores] = useState();

  const getScores = async (userID) => {
    fetch("https://siasky.dev/leaderboard/users?userPK=" + userID)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          setScores(data[0]);
        }
      });
  };

  const resetScores = () => {
    setScores();
  };

  return [scores, getScores, resetScores];
};
