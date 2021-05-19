import Link from "../Link";
import { Header2, Subheader } from "../Typography";
import { useContext, useState, useEffect } from "react";
import { SkynetContext } from "../../state/SkynetContext";

const projects = [
  {
    name: "Arigale CMS",
    description: "Decentralized backend for schemas and posts.",
    imageUrl: "/projects/Arigale.png",
    url: "arigale.hns",
  },
  {
    name: "GiphyAF",
    description: "Create your GIF library on Skynet.",
    imageUrl: "/projects/giphyaf.png",
    url: "giphyaf.hns",
  },
  {
    name: "How About Skapp",
    description: "Share and rate skapp ideas.",
    imageUrl: "/projects/Habout.png",
    url: "tirthahalli.hns",
  },
  {
    name: "SkyBookmarks",
    description: "Save bookmarks and search the saved bookmarks of others.",
    imageUrl: "/projects/SkyBookmarks.png",
    url: "skybookmarks.hns",
  },
  {
    name: "SkyChat",
    description: "Chat with friends and strangers.",
    imageUrl: "/projects/SkyChat2.png",
    url: "chatbubble.hns",
  },
  {
    name: "SkyChess",
    description: "Find opponents and rewatch chess matches.",
    imageUrl: "/projects/SkyChess.png",
    url: "skychess.hns",
  },
  {
    name: "SkyNect-4",
    description: "Childhood classic, running on Skynet.",
    imageUrl: "/projects/SkyNect.png",
    url: "skynect4.hns",
  },
  {
    name: "SkyNetGram",
    description: "Share your photos on a common feed.",
    imageUrl: "/projects/SkynetGram.png",
    url: "metformin10.hns",
  },
  {
    name: "SkyTransfer",
    description: "Encrypted file storage and sharing, across devices.",
    imageUrl: "/projects/SkyTransfer1.png",
    url: "skytransfer.hns",
  },
  {
    name: "SVGUp",
    description: "Edit and Upload SVGs on Skynet",
    imageUrl: "/projects/SVGUp.png",
    url: "0008ma52pgm6oac9qrj3fi5a202tcu590bs7es148n5e6mjm78n4it0",
  },
  {
    name: "Web Games IDE",
    description: "Create webgames and deploy them to Skynet.",
    imageUrl: "/projects/WebGamesIDE.png",
    url: "webgames-ide.hns",
  },
];

export default function ProjectsSection() {
  const { client } = useContext(SkynetContext);
  const [portalProjects, setProjects] = useState(projects);

  useEffect(() => {
    const initProjects = async () => {
      let p = await Promise.allSettled(
        projects.map(async (r) => {
          let url = await client.getFullDomainUrl(r.url, { subdomain: true });
          return { ...r, url };
        })
      );

      p = p.map((r) => {
        return r.value;
      });

      setProjects(p);
    };

    if (client) {
      initProjects();
    }
  }, [client]);

  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <Header2>Builder Projects to Explore</Header2>
            <Subheader>
              Highlights of some of the most prominent projects made by our builders in the first phase.
            </Subheader>
          </div>
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
            {portalProjects.map((project) => (
              <li key={project.name}>
                <div className="space-y-4">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <div className="aspect-w-3 aspect-h-2 bg-palette-600 rounded-lg border border-palette-300">
                      <img
                        className="object-cover shadow-lg rounded-lg hover:opacity-90 transition-opacity bg-palette-600"
                        src={project.imageUrl}
                        alt="project thumbnail or screenshot"
                      />
                    </div>
                  </a>

                  <div className="space-y-1">
                    <p className="font-semibold text-xl sm:text-base">
                      <Link href={project.url}>{project.name}</Link>
                    </p>
                    <p className="text-base sm:text-sm font-content text-palette-400">{project.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
