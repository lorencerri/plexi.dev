import type { MetaFunction } from "@remix-run/node";

import {
  Logo,
  Header,
  Hero,
  List,
  SectionHeader,
  CardGrid,
  UserGrid,
  Footer,
} from "~/components";

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
    <div>
      <Header logo={<Logo />} links={links} />
      <Hero />
      <List />
      <SectionHeader title="Meet The Team" highlight="Team" />
      <UserGrid />
      <SectionHeader title="Major Projects" highlight="Projects" />
      <CardGrid />
      <Footer logo={<Logo />} links={links} />
    </div>
  );
}
