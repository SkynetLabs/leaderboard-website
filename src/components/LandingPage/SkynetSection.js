import { ReactComponent as LogoSymbol } from "../../svg/LogoSymbol.svg";
import Link from "../Link";
import { Header2, Paragraph } from "../Typography";

export default function SkynetSection() {
  return (
    <div className="mt-32">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <div className="space-y-6">
            <Header2>Decentralized Internet for&nbsp;a&nbsp;Free&nbsp;Future</Header2>

            <Paragraph>
              Skynet is a content and application hosting platform bringing decentralized storage to users, creators and
              app developers. For more information about Skynet and Skynet Labs, visit{" "}
              <Link href="https://siasky.net">siasky.net</Link>.
            </Paragraph>

            <Paragraph>
              Learn more about the Built to Explore hackathon in our{" "}
              <Link href="https://blog.sia.tech/built-to-explore-the-skynet-spring-2021-hackathon-a0cff382bb0c">
                accouncement
              </Link>
              .
            </Paragraph>
          </div>

          <div className="mt-12 lg:mt-0 flex justify-center">
            <LogoSymbol className="fill-current text-palette-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
