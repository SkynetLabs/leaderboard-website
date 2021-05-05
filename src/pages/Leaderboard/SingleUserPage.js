import { useEffect, useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ordinal from "ordinal";
import { UserCircleIcon } from "@heroicons/react/solid";
// import { useSocialList } from "../../hooks/useSocialList";
// import Tag from "../../components/Tag";
import { useProfile } from "../../hooks/useProfile";
import { SkynetContext } from "../../state/SkynetContext";

// TODO: if userID == showID, link to edit page? load latest, not scraper profile?

export default function SingleUserPage({ setTitle }) {
  const { showID } = useParams();
  // const { userID } = useContext(SkynetContext);
  // const [loading, setLoading] = useState(true);
  const [singleProfile, singleScores, singleAvatar, getSingleProfile] = useProfile();
  // const [
  //   areFollowing,
  //   followsYou,
  //   followingList,
  //   getFollowingList,
  //   followUser,
  //   unfollowUser,
  //   _,
  //   listLoading,
  //   actionLoading,
  // ] = useSocialList();
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    setTitle("");
  }, [setTitle]);

  useEffect(() => {
    if (singleProfile.connections) {
      let filledConnections = singleProfile.connections.filter((connection) => {
        for (const [_, value] of Object.entries(connection)) {
          if (value) {
            return true;
          }

          return false;
        }

        return false;
      });

      setConnections(filledConnections);
    } else {
      setConnections([]);
    }
  }, [singleProfile]);

  useEffect(() => {
    if (showID) {
      getSingleProfile(showID);
      // getFollowingList(showID);
    }
  }, [showID, getSingleProfile]);

  return (
    <main class="profile-page">
      <section class="relative py-16">
        <div class="container mx-auto px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div class="relative">
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
                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  {/* <div class="py-6 px-3 mt-32 sm:mt-0">
                    {!!followsYou && <Tag>Follows You</Tag>}

                    {actionLoading && userID && (
                      <button
                        class="ml-16 bg-pink-500 active:bg-rose-300 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all 0.15s ease 0s" }}
                      >
                        [Spinner]
                      </button>
                    )}

                    {!areFollowing && !actionLoading && userID && (
                      <button
                        class="ml-16 bg-pink-500 active:bg-rose-300 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all 0.15s ease 0s" }}
                        onClick={() => followUser()}
                      >
                        Follow
                      </button>
                    )}
                    {areFollowing && !actionLoading && userID && (
                      <button
                        class="bg-pink-500 active:bg-rose-300 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all 0.15s ease 0s" }}
                        onClick={() => unfollowUser()}
                      >
                        Unfollow
                      </button>
                    )}
                  </div> */}
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block tracking-wide text-gray-700">
                        {singleScores.rank ? ordinal(singleScores.rank) : "-"}
                      </span>
                      <span class="text-sm text-gray-500">Rank</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {singleScores.newContentTotal ? singleScores.newContentTotal : "-"}
                      </span>
                      <span class="text-sm text-gray-500">Content</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {singleScores.interactionsTotal ? singleScores.interactionsTotal : "-"}
                      </span>
                      <span class="text-sm text-gray-500">Interactions</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h2 class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  {singleProfile.username ? singleProfile.username : "-"}
                </h2>
                {(singleProfile.firstName || singleProfile.lastname) && (
                  <h3 class="text-md font-semibold leading-normal mb-2 text-gray-600 mb-2">
                    {singleProfile.firstName} {singleProfile.lastName}
                  </h3>
                )}
                <h4 class="text-md font-normal leading-normal mb-2 text-gray-600 mb-2">{showID ? showID : "-"}</h4>
                <div class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-semibold">
                  <span class="font-normal uppercase">Location:</span>{" "}
                  {singleProfile.location ? singleProfile.location : "Unknown"}
                </div>
                {singleProfile.aboutMe && (
                  <div class="py-10 text-center">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-9/12 px-4">
                        <div class="font-thin uppercase mb-2 text-gray-500">About Me</div>
                        <p class="mb-4 text-lg leading-relaxed text-gray-800">{singleProfile.aboutMe}</p>
                      </div>
                    </div>
                  </div>
                )}
                {!!connections.length && (
                  <div class="py-10 text-center">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-9/12 px-4">
                        <div class="font-thin uppercase mb-2 text-gray-500">Connect</div>
                        {connections.map((connection, i) => {
                          return (
                            <p key={i} class="mb-4 text-lg leading-relaxed text-gray-800">
                              Connection Here
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
                {/* <div class="mb-2 text-gray-700 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i>Solution Manager - Creative Tim Officer
                </div>
                <div class="mb-2 text-gray-700">
                  <i class="fas fa-university mr-2 text-lg text-gray-500"></i>University of Computer Science
                </div> */}
                <div class="py-10 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4"></div>
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
