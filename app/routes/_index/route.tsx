import type { MetaFunction } from "@remix-run/node";

import {
  Logo,
  Header,
  Hero,
  List,
  CardGrid,
  UserGrid,
  Footer,
} from "~/components";
import { AdaptiveLayout } from "~/components/adaptive-ui/Layout/AdaptiveLayout";

import { SectionHeader } from "~/components/adaptive-ui/Text/SectionHeader";

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
      <SectionHeader text="Meet The Team" highlight="Team" />
      <UserGrid />
      <SectionHeader text="Major Projects" highlight="Projects" />
      <CardGrid />
      <Footer logo={<Logo />} links={links} />
    </AdaptiveLayout>
  );
}
