import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/navigation/Header";
import Logo from "./Logo";
import Hero from "~/components/information/Hero";
import List from "~/components/data/List";
import SectionHeader from "~/components/text/SectionHeader";
import UserGrid from "~/components/data/UserGrid";
import CardGrid from "~/components/data/CardGrid";
import Footer from "~/components/navigation/Footer";

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
      <Footer links={links} />
    </div>
  );
}
