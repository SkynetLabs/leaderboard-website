import Link from "../Link";
import { Header2, Subheader } from "../Typography";

const projects = [
  {
    name: "Arigale CMS",
    description: "Decentralized backend for schemas and posts.",
    imageUrl: "/projects/Arigale.png",
    url: "https://arigale.hns.siasky.net",
  },
  {
    name: "GiphyAF",
    description: "Create your GIF library on Skynet.",
    imageUrl: "/projects/giphyaf.png",
    url: "https://giphyaf.hns.siasky.net",
  },
  {
    name: "Habout",
    description: "Share and rate ideas.",
    imageUrl: "/projects/Habout.png",
    url: "https://000039hsk30kqji7a52014da9sr5pujkp3nnneufi5ghd9ieaul7pdo.siasky.net",
  },
  {
    name: "SkyBookmarks",
    description: "Save bookmarks and search the saved bookmarks of others.",
    imageUrl: "/projects/SkyBookmarks.png",
    url: "https://skybookmarks.hns.siasky.net",
  },
  {
    name: "SkyChess",
    description: "Find opponents and rewatch chess matches.",
    imageUrl: "/projects/SkyChess.png",
    url: "https://skychess.hns.siasky.net",
  },
  {
    name: "SkyNect-4",
    description: "Childhood classic, running on Skynet.",
    imageUrl: "/projects/SkyNect.png",
    url: "https://skorn.hns.siasky.net",
  },
  {
    name: "SkyNetGram",
    description: "Share your photos on a common feed.",
    imageUrl: "/projects/SkynetGram.png",
    url: "https://metformin10.hns.siasky.net",
  },
  {
    name: "SkyTransfer",
    description: "Encrypted file storage and sharing, across devices.",
    imageUrl: "/projects/SkyTransfer1.png",
    url: "https://skytransfer.hns.siasky.net",
  },
  {
    name: "SVGUp",
    description: "Edit and Upload SVGs on Skynet",
    imageUrl: "/projects/SVGUp.png",
    url: "https://0008ma52pgm6oac9qrj3fi5a202tcu590bs7es148n5e6mjm78n4it0.siasky.net",
  },
  {
    name: "Web Games IDE",
    description: "Create webgames and deploy them to Skynet.",
    imageUrl: "/projects/WebGamesIDE.png",
    url: "https://webgames-ide.hns.siasky.net",
  },
];

export default function ProjectsSection() {
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
            {projects.map((project) => (
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
