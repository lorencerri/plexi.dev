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
import { Dots } from "~/components/adaptive-ui/Decorative/Dots";

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
    <AdaptiveLayout>
      <Dots left={0} top={0} />
      <Dots left={60} top={0} />
      <Dots left={0} top={140} />
      <Dots right={0} top={60} />
      <Dots left={100} top={1600} />
      <Dots left={160} top={1600} />
      <Dots left={100} top={1540} />
      <Dots right={100} top={1660} />
      <Dots left={100} top={2600} />
      <Dots left={160} top={2600} />
      <Dots left={100} top={2540} />
      <Dots right={100} top={2660} />

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
