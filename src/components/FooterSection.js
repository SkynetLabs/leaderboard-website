import Link from "./Link";

// this gets injected by github action in build time
const commitSha = process.env.REACT_APP_GIT_SHA;

export default function FooterSection() {
  return (
    <footer className="mt-24 bg-palette-600 sm:mt-12">
      <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 space-y-2">
        <p className="text-center text-palette-300">2021 Skynet Labs, Inc.</p>

        <p className="text-center text-palette-300 text-sm">
          Fork me on a <Link href="https://github.com/SkynetLabs/leaderboard-website">GitHub</Link>
        </p>

        {commitSha && (
          <p className="text-center text-xs font-mono">
            <Link href={`https://github.com/SkynetLabs/leaderboard-website/commit/${commitSha}`}>{commitSha}</Link>
          </p>
        )}
      </div>
    </footer>
  );
}
