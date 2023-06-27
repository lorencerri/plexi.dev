import { useScrollIntoView } from "@mantine/hooks";

import Header from "app/sections/Header";
import Hero from "app/sections/Hero";
import Team from "app/sections/Team";
import Projects from "app/sections/Projects";
import Footer from "~/sections/Footer";
import QuickLinks from "~/sections/QuickLinks";

export default function Index() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <div>
      <Header />
      <Hero scrollIntoView={scrollIntoView} />
      <QuickLinks />
      <Team />
      <Projects targetRef={targetRef} />
      <Footer />
    </div>
  );
}
