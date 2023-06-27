import { useScrollIntoView } from "@mantine/hooks";

import Header from "app/components/Header";
import Hero from "app/components/Hero";
import Team from "app/components/Team";
import Projects from "app/components/Projects";
import Footer from "app/components/Footer";
import QuickLinks from "~/components/QuickLinks";

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
