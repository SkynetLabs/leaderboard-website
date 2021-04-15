import { ReactComponent as Logo } from "./svg/Logo.svg";
import Countdown from "./Countdown";

function App() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div>
                <Logo className="h-16 w-auto" />
              </div>
              <div className="mt-10">
                <div>
                  <span className="rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold text-primary tracking-wide uppercase">
                    Leaderboard coming soon!
                  </span>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-extrabold text-palette-600 tracking-tight sm:text-5xl">
                    Built to Explore, A&nbsp;Dream of the Future
                  </h1>
                  <p className="mt-6 text-xl text-palette-400">
                    Join with other builders, creators and dreamers in Skynet’s latest hackathon - no prior tech
                    experience required. The build phase is underway, and we’ll be starting our next phase on{" "}
                    <span className="font-extrabold text-palette-600">April 30, 2021.</span>
                  </p>
                </div>
                <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="hero_email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="hero_email"
                      type="email"
                      className="block w-full border border-palette-200 rounded-md px-5 py-3 text-base text-palette-600 placeholder-palette-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-primary text-base font-semibold text-palette-600 shadow hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10 transition-colors duration-200"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
                <div className="mt-12 flex flex-col space-y-8">
                  <h4 className="text-xl text-palette-600 font-semibold tracking-tight sm:text-2xl text-center sm:text-left lg:text-center">
                    Countdown to Explore Phase
                  </h4>
                  <Countdown />
                </div>
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
                  src="/SkynetArt.png"
                  alt="Skynet Graphic"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial/stats section */}
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
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/SkynetArt.png"
                    alt="Skynet Graphic"
                  />
                  <div className="absolute inset-0 bg-rose-500" style={{ mixBlendMode: "multiply" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary opacity-90" />
                  <div className="relative px-8">
                    <blockquote className="mt-8">
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
                          added for building mature decentralized apps. Building an application using Skynet is like
                          putting data legos together. It’s that simple.
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
                <h3 className="text-2xl text-palette-600 font-semibold tracking-tight sm:text-3xl">
                  Build Phase (Ongoing, &gt;$20k Prizes)
                </h3>
                <p className="text-lg text-palette-400 font-content">
                  The build phase is taking place on Gitcoin, sign up and start hacking today.
                </p>

                <h3 className="text-2xl text-palette-600 font-semibold tracking-tight sm:text-3xl">
                  Explore Phase ($3k Prizes)
                </h3>
                <p className="text-lg text-palette-400 font-content">
                  Application developers will have the opportunity to test their app with real-life end users. The goal
                  of Explore is to create and share amazing content with the world. Users from all backgrounds and
                  experience levels with decentralized technology are welcome to participate in Explore! Small prizes
                  will be awarded to participants throughout this phase, with an exciting participation prize to anyone
                  who engages with multiple applications per day for at least 15 out of the 18 days.
                </p>

                <h3 className="text-2xl text-palette-600 font-semibold tracking-tight sm:text-3xl">
                  Dream Phase ($2k Prizes)
                </h3>
                <p className="text-lg text-palette-400 font-content">
                  Technical and non-technical participants will ideate around future decentralized use-cases across
                  industries. The Dream phase is about letting go of the realities of today and instead looking into the
                  future. The submission (be it a write-up, a video essay, or even an interpretive art piece) should
                  contemplate the technological revolution of decentralization, and try to re-imagine the world where
                  decentralization has replaced key parts of societal infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud section */}
        <div className="mt-32">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-palette-600 tracking-tight sm:text-4xl">
                  Decentralized Internet for&nbsp;a&nbsp;Free&nbsp;Future
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-7 text-palette-400 font-content">
                  Skynet is a content and application hosting platform bringing decentralized storage to users, creators
                  and app developers. For more information about Skynet and Skynet Labs, visit{" "}
                  <a
                    href="https://siasky.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light"
                  >
                    siasky.net
                  </a>
                  .
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                <div className="col-span-1 flex justify-center py-8 px-8 bg-palette-100">
                  <img
                    className="max-h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-palette-100">
                  <img
                    className="max-h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-palette-100">
                  <img
                    className="max-h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-palette-100">
                  <img
                    className="max-h-12"
                    src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                    alt="Laravel"
                  />
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-palette-100">
                  <img
                    className="max-h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-palette-100">
                  <img
                    className="max-h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
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
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-palette-600 tracking-tight sm:text-4xl">
                    Get notified for the next phase.
                  </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg">
                    We’ll have daily prizes, and will be showing all the applications builders have made for you to
                    explore in at our Explore Phase kickoff event. Sign up to be reminded.
                  </p>
                </div>
                <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta_email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta_email"
                      type="email"
                      className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-palette-600 placeholder-palette-300 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-palette-600 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer section */}
      <footer className="mt-24 bg-palette-600 sm:mt-12">
        <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 space-y-2">
          <p className="text-center text-palette-300">2021 Skynet Labs, Inc.</p>

          <p className="text-center text-palette-300 text-sm">
            Fork me on a{" "}
            <a
              className="text-green-500 hover:underline"
              href="https://github.com/SkynetLabs/leaderboard-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>

          {process.env.REACT_APP_GIT_SHA && (
            <p className="text-center text-palette-400 text-xs">
              <a
                href={`https://github.com/SkynetLabs/leaderboard-website/commit/${process.env.REACT_APP_GIT_SHA}`}
                className="hover:underline font-mono"
              >
                {process.env.REACT_APP_GIT_SHA}
              </a>
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;
