import { ReactComponent as OpenAI } from "../assets/logos/openai.svg";
import { ReactComponent as AWS } from "../assets/logos/amazonaws.svg";
import { ReactComponent as Twilio } from "../assets/logos/twilio.svg";
import { ReactComponent as Azure } from "../assets/logos/microsoftazure.svg";
import { ReactComponent as HubSpot } from "../assets/logos/hubspot.svg";
import { ReactComponent as Salesforce } from "../assets/logos/salesforce.svg";
import { ReactComponent as Zoho } from "../assets/logos/zoho.svg";
import { ReactComponent as Stripe } from "../assets/logos/stripe.svg";
import { ReactComponent as Apple } from "../assets/logos/apple.svg";
import { ReactComponent as GooglePlay } from "../assets/logos/googleplay.svg";
import { ReactComponent as ReactLogo } from "../assets/logos/react.svg";

export const trustLogos = [
  { name: "OpenAI", Icon: OpenAI },
  { name: "AWS", Icon: AWS },
  { name: "Twilio", Icon: Twilio },
  { name: "Azure", Icon: Azure },
  { name: "HubSpot", Icon: HubSpot },
  { name: "Salesforce", Icon: Salesforce },
  { name: "Zoho", Icon: Zoho },
  { name: "Stripe", Icon: Stripe },
  { name: "Apple", Icon: Apple },
  { name: "Google Play", Icon: GooglePlay },
  { name: "React", Icon: ReactLogo },
];

const LogoItem = ({ name, Icon }) => (
  <div className="logo-marquee-item">
    <Icon aria-hidden="true" />
    <span>{name}</span>
  </div>
);

const LogoRow = ({ hidden }) => (
  <div className="logo-marquee-row" aria-hidden={hidden || undefined}>
    {trustLogos.map((logo) => (
      <LogoItem key={`${logo.name}-${hidden ? "dup" : "a"}`} {...logo} />
    ))}
  </div>
);

const TrustLogos = ({ marquee = true }) => {
  if (!marquee) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 text-ink/55">
        {trustLogos.map((logo) => (
          <LogoItem key={logo.name} {...logo} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="logo-marquee"
      role="img"
      aria-label="Platforms we build on: OpenAI, AWS, Twilio, Azure, HubSpot, Salesforce, Zoho, Stripe, Apple, Google Play, and React"
    >
      <div className="logo-marquee-track">
        <LogoRow />
        <LogoRow hidden />
      </div>
    </div>
  );
};

export default TrustLogos;
