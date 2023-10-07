import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Logo from "./Logo";
import Hero from "~/components/Hero";
import List from "~/components/List";
import SectionHeader from "~/components/SectionHeader";
import UserGrid from "~/components/UserGrid";
import CardGrid from "~/components/CardGrid";
import Footer from "~/components/Footer";

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
