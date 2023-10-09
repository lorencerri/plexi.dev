import type { MetaFunction } from "@remix-run/node";

import Logo from "~/components/Logo";
import Hero from "~/components/Hero";
import List from "~/components/List";
import CardGrid from "~/components/CardGrid";
import UserGrid from "~/components/UserGrid";

import { AdaptiveLayout } from "~/components/adaptive-ui/Layout/AdaptiveLayout";
import { Heading } from "~/components/adaptive-ui/Text/Heading";
import { Header } from "~/components/adaptive-ui/Layout/Header";
import { Footer } from "~/components/adaptive-ui/Layout/Footer";

export const meta: MetaFunction = () => {
  return [{ title: "Plexi Development" }];
};

const links = [
  { url: "https://twitter.com/plexidev", label: "Twitter" },
  { url: "https://youtube.com/c/truexpixels", label: "YouTube" },
  { url: "https://github.com/plexidev", label: "GitHub" },
  { url: "https://discord.gg/plexidev", label: "Discord" },
];

export default function Index() {
  return (
    <AdaptiveLayout dots={{ seed: "gggg" }}>
      <Header logo={<Logo />} links={links} />
      <Hero />
      <List />
      <Heading text="Meet The Team" highlight="Team" />
      <UserGrid />
      <Heading text="Major Projects" highlight="Projects" />
      <CardGrid />
      <Footer logo={<Logo />} links={links} />
    </AdaptiveLayout>
  );
}
