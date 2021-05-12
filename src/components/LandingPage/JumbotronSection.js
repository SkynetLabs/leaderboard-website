import Button from "../Button";
import { Header2 } from "../Typography";

export default function JumbotronSection() {
  return (
    <div className="relative mt-24 sm:mt-32 sm:py-16">
      <div aria-hidden="true" className="hidden sm:block">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-palette-100 rounded-r-3xl" />
        <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
          <defs>
            <pattern
              id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-palette-100" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
        </svg>
      </div>
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative rounded-2xl px-6 py-10 bg-primary overflow-hidden shadow-xl sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                className="text-primary-light text-opacity-40"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                className="text-primary-light text-opacity-60"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="sm:text-center space-y-6">
              <Header2>Ready to start Exploring?</Header2>
              <p className="mx-auto max-w-2xl text-lg text-palette-600">
                Head to the leaderboard to sign-up with a profile, create new content and compete for prizes!
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="max-w-xl w-full">
                <Button buttonColor="dark" to="/leaderboard">
                  Start Exploring
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
