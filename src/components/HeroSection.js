import { ReactComponent as Logo } from "../svg/LogoBlackText.svg";
// import Countdown from "./Countdown";
import SubscribeForm from "./SubscribeForm";
import Tag from "./Tag";
import { Header1, Subheader, Paragraph } from "./Typography";
// import { Header1, Header4, Subheader, Paragraph } from "./Typography";

export default function HeroSection() {
  return (
    <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
          <div>
            <Logo className="h-12 w-auto" />
          </div>
          <div className="mt-10">
            <Tag>Leaderboard coming soon!</Tag>

            <div className="mt-6 sm:max-w-xl space-y-6">
              <Header1>Built to Explore&nbsp;- A&nbsp;Dream of the Future</Header1>
              <Subheader>
                Join builders, creators and dreamers in Skynet’s latest hackathon - no prior tech experience required.
                The Build phase is currently underway.
              </Subheader>
              <Paragraph>
                The Explore phase begins on <span className="font-extrabold text-palette-600">May 7, 2021</span> and is
                open to the public. Win Siacoin and swag for trying out the new decentralized ecosystem! To be notified
                for the Explore phase, sign up below:
              </Paragraph>
            </div>

            <SubscribeForm />

            {/* <div className="mt-12 sm:mt-24 flex flex-col space-y-8">
              <Header4>Countdown to Explore Phase</Header4>
              <Countdown />
            </div> */}
          </div>
        </div>
      </div>
      <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="hidden sm:block">
            <div className="absolute inset-y-0 left-1/2 w-screen bg-palette-100 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
            <svg
              className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-palette-100" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
            </svg>
          </div>
          <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
            <img
              className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
              src="/artwork.png"
              alt="Skynet Graphic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
