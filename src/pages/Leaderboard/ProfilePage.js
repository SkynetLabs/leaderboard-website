import { useEffect, useContext } from "react";
import { SkynetContext } from "../../state/SkynetContext";
import { useState } from "react";
import ProfileEditor from "../../components/ProfileEditor";

export default function ProfilePage({ setTitle }) {
  const { userID, profile } = useContext(SkynetContext);
  const [loading, setLoading] = useState(false);
  const [emptyProfile, setEmptyProfile] = useState(true);

  useEffect(() => {
    setTitle("MySky Profile");
  }, [setTitle]);

  useEffect(() => {
    setLoading(true);
    if (profile) {
      const { aboutMe, avatar, username } = profile;
      console.log(profile);

      if (!aboutMe && !avatar && !username) {
        setEmptyProfile(true);
      } else {
        setEmptyProfile(false);
      }
    } else {
      setEmptyProfile(true);
    }
    setLoading(false);
  }, [profile]);

  return (
    <div className="space-y-4">
      {loading && "Loading..."}
      {!loading && !userID && <CreateAccountInstructions />}
      {!loading && userID && !profile && <ProfileDisplay firstTime={true} />}
      {!loading && userID && profile && <ProfileDisplay firstTime={false} />}
    </div>
  );
}

const CreateAccountInstructions = () => {
  return (
    <div>
      <h1>Welcome to the Skynet -- Login with your MySky Account to get started.</h1>
      <p>
        A MySky account lets you take your identity and data with you across all of Skynet. Something about discoverable
        content. It's fully decentralized.
      </p>
    </div>
  );
};

const ProfileDisplay = ({ firstTime }) => {
  return (
    <div>
      {/* <h1>You're logged in!</h1>
      {firstTime && (
        <p>
          "You're logged in and don't have a profile. maybe you could use this form to create one.
          https://skyprofile.hns.siasky.net/"}
        </p>
      )}
      {!firstTime && (
        <p>
          "You're logged in and already have a profile. maybe you could use update it or be presented with the cards
          from the frontpage.
        </p>
      )} */}
      <ProfileEditor />
    </div>
  );
};
