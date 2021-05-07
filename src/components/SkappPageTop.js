import React, { useEffect, useContext, useState } from "react";
import { SkynetContext } from "../state/SkynetContext";
import { useAvatar } from "../hooks/useAvatar";
import { Header1, Header3, Subheader, Paragraph } from "./Typography";
import ProgressSteps from "./ProgressSteps";
import Link from "./Link";
// import MySkyButton from "./MySkyButton";

export default function SkappPageTop() {
  const { userID } = useContext(SkynetContext);
  const [avatar] = useAvatar();
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (userID && avatar) {
      setStep(3);
    } else if (userID) {
      setStep(2);
    } else {
      setStep(1);
    }
  }, [userID, avatar, setStep]);

  return (
    <div className="space-y-4">
      <div className="inline-block pr-10 pb-1 border-b-8 border-primary-light mb-10">
        <Header1>Welcome Explorers</Header1>
      </div>
      {/* <div className="bg-white px-6 py-6 rounded shadow"> */}
      <div className="pb-6">
        <Header3>Getting Started</Header3>
        <ProgressSteps step={step} />
      </div>
      <Divider />
      <div className="py-6 text-center">
        <Subheader>
          Have Questions? Want to chat with other explorers?{" "}
          <Link href="https://discord.gg/skynetlabs">Join our Discord.</Link>
        </Subheader>
      </div>
      <Divider />
      {/* <Header3>Step {step}</Header3>
      <div>
        <MySkyButton />
      </div>
      <Paragraph>
        <p className="py-3">
          Look for the MySky Login button . Your data will be public, discoverable, and usable by other apps!
        </p>
      </Paragraph>

      <Divider /> */}
      <div className="pt-6">
        <Header3>Check out the Builder Apps</Header3>
        <Paragraph>
          <p className="py-3">
            Look for the MySky Login button and make some things. Your data will be public, discoverable, and usable by
            other apps!
          </p>
        </Paragraph>
      </div>
    </div>
  );
}

const Divider = () => {
  return (
    <div className="w-100 py-4">
      <div className="w-1/2 border-gray-300 border-b-2 mx-auto" />
    </div>
  );
};
