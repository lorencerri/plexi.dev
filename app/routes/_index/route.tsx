import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Logo from "./Logo";
import Hero from "~/components/Hero";

export const meta: MetaFunction = () => {
  return [{ title: "config-dnd" }];
};

export default function Index() {
  return (
    <div>
      <Header
        logo={<Logo />}
        links={[
          { url: "https://twitter.com/lorencerri", label: "Twitter" },
          { url: "https://youtube.com/c/truexpixels", label: "YouTube" },
          { url: "https://github.com/lorencerri", label: "GitHub" },
          { url: "https://discord.gg/plexidev", label: "Discord" },
        ]}
      />
      <Hero />
    </div>
  );
}
