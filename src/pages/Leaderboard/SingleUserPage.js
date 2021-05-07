import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ordinal from "ordinal";
import { UserCircleIcon } from "@heroicons/react/solid";
// import { useSocialList } from "../../hooks/useSocialList";
// import Tag from "../../components/Tag";
import { useProfile } from "../../hooks/useProfile";
// import { SkynetContext } from "../../state/SkynetContext";

// TODO: if userID == showID, link to edit page? load latest, not scraper profile?

export default function SingleUserPage({ setTitle }) {
  const { showID } = useParams();
  const [singleProfile, singleScores, singleAvatar, setID] = useProfile();
  const [connections] = useState([]);

  useEffect(() => {
    setTitle("");
  }, [setTitle]);

  // useEffect(() => {
  //   if (singleProfile.connections) {
  //     let filledConnections = singleProfile.connections.filter((connection) => {
  //       for (const [, value] of Object.entries(connection)) {
  //         if (value) {
  //           return true;
  //         }

  //         return false;
  //       }

  //       return false;
  //     });

  //     setConnections(filledConnections);
  //   } else {
  //     setConnections([]);
  //   }
  // }, [singleProfile]);

  useEffect(() => {
    if (showID) {
      setID(showID);
    }
  }, [showID, setID]);

  return (
    <main className="profile-page">
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-4/12 px-4 lg:order-2 flex justify-center">
                  <div className="mx-auto">
                    {singleAvatar && (
                      <img
                        alt="..."
                        src={singleAvatar}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    )}
                    {!singleAvatar && (
                      <UserCircleIcon
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 text-gray-200"
                        style={{ maxWidth: "150px" }}
                      />
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  {/* <div className="py-6 px-3 mt-32 sm:mt-0">
                    {!!followsYou && <Tag>Follows You</Tag>}

                    {actionLoading && userID && (
                      <button
                        className="ml-16 bg-pink-500 active:bg-rose-300 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all 0.15s ease 0s" }}
                      >
                        [Spinner]
                      </button>
                    )}

                    {!areFollowing && !actionLoading && userID && (
                      <button
                        className="ml-16 bg-pink-500 active:bg-rose-300 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all 0.15s ease 0s" }}
                        onClick={() => followUser()}
                      >
                        Follow
                      </button>
                    )}
                    {areFollowing && !actionLoading && userID && (
                      <button
                        className="bg-pink-500 active:bg-rose-300 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all 0.15s ease 0s" }}
                        onClick={() => unfollowUser()}
                      >
                        Unfollow
                      </button>
                    )}
                  </div> */}
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8 lg:mt-0 mt-16">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block tracking-wide text-gray-700">
                        {singleScores.rank ? ordinal(singleScores.rank) : "-"}
                      </span>
                      <span className="text-sm text-gray-500">Rank</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {singleScores.newContentTotal ? singleScores.newContentTotal : "-"}
                      </span>
                      <span className="text-sm text-gray-500">Content</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {singleScores.interactionsTotal ? singleScores.interactionsTotal : "-"}
                      </span>
                      <span className="text-sm text-gray-500">Interactions</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h2 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 ">
                  {singleProfile.username ? singleProfile.username : "-"}
                </h2>
                {(singleProfile.firstName || singleProfile.lastname) && (
                  <h3 className="text-md font-semibold leading-normal mb-2 text-gray-600">
                    {singleProfile.firstName} {singleProfile.lastName}
                  </h3>
                )}
                <h4 className="text-md font-normal leading-normal mb-2 text-gray-600 mb-2">{showID ? showID : "-"}</h4>
                {singleProfile.location && (
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-semibold">
                    <span className="font-normal uppercase">Location:</span>{" "}
                    {singleProfile.location ? singleProfile.location : "Unknown"}
                  </div>
                )}
                {singleProfile.aboutMe && (
                  <div className="py-10 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <div className="font-thin uppercase mb-2 text-gray-500">About Me</div>
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">{singleProfile.aboutMe}</p>
                      </div>
                    </div>
                  </div>
                )}
                {!!connections.length && (
                  <div className="py-10 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <div className="font-thin uppercase mb-2 text-gray-500">Connect</div>
                        {connections.map((connection, i) => {
                          return (
                            <p key={i} className="mb-4 text-lg leading-relaxed text-gray-800">
                              Connection Here
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
                {/* <div className="mb-2 text-gray-700 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>Solution Manager - Creative Tim Officer
                </div>
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>University of Computer Science
                </div> */}
                <div className="py-10 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
