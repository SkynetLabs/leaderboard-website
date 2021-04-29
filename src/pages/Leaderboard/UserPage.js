import { useEffect, useContext } from "react";
import { SkynetContext } from "../../state/SkynetContext";

export default function ProfilePage({ setTitle }) {
  const { profile } = useContext(SkynetContext);

  useEffect(() => {
    setTitle("MySky Profile");
  }, [setTitle]);

  return <div className="space-y-4">Display a user edit form.</div>;
}
