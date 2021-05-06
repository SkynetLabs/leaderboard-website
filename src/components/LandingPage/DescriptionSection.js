import Link from "../Link";
import Tag from "../Tag";
import { Header3, Paragraph } from "../Typography";

const phase = "explore"; // build, explore, dream

const PhaseHeader = ({ children, current }) => {
  if (current) {
    return (
      <div className="flex justify-between space-x-4">
        <Header3>{children}</Header3>
        <span className="flex items-center flex-shrink-0">
          <Tag>in progress</Tag>
        </span>
      </div>
    );
  }

  return <Header3>{children}</Header3>;
};

export default function DescriptionSection() {
  return (
    <div className="relative mt-20">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full bg-palette-100 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-palette-100" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover blur-lg"
                src="/artwork.png"
                alt="Skynet Graphic"
              />
              <div className="absolute inset-0 bg-rose-500" style={{ mixBlendMode: "multiply" }} />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-white opacity-50"
                style={{ mixBlendMode: "multiply" }}
              />
              <div className="relative px-8">
                <blockquote className="mt-8" style={{ textShadow: "0px 0px 14px #000" }}>
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-rose-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative font-content">
                      We are impressed with Skynet SDK’s current capabilities and how fast new features are getting
                      added for building mature decentralized apps. Building an application using Skynet is like putting
                      data legos together. It’s that simple.
                    </p>
                    <p className="relative font-content mt-2">
                      We certainly believe that Skynet will be a must tech for future Internet applications.
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-primary-light">
                      crypto_rocket, Product Architect, SkySpaces
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <div className="pt-12 sm:pt-16 lg:pt-20 space-y-6">
            <PhaseHeader current={phase === "build"}>Build Phase (&gt;$20k Prizes)</PhaseHeader>
            <Paragraph>
              In the build phase, hackers created web applications focused on creating and sharing content using
              Skynet's new MySky and DAC tools.
            </Paragraph>

            <PhaseHeader current={phase === "explore"}>Explore Phase ($3k Prizes)</PhaseHeader>
            <Paragraph>
              Application developers will have the opportunity to test their app with real-life end users. The goal of
              Explore is to create and share amazing content with the world. Users from all backgrounds and experience
              levels with decentralized technology are welcome to participate in Explore! Small prizes will be awarded
              to participants throughout this phase, with an exciting participation prize to anyone who engages with
              multiple applications per day for at least 15 out of the 18 days.
            </Paragraph>

            <PhaseHeader current={phase === "dream"}>Dream Phase ($2k Prizes)</PhaseHeader>
            <Paragraph>
              Technical and non-technical participants will ideate around future decentralized use-cases across
              industries. The Dream phase is about letting go of the realities of today and instead looking into the
              future. The submission (be it a write-up, a video essay, or even an interpretive art piece) should
              contemplate the technological revolution of decentralization, and try to re-imagine the world where
              decentralization has replaced key parts of societal infrastructure.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}
