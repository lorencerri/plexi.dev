import Header from "app/components/Header";
import Hero from "app/components/Hero";
import Team from "app/components/Team";
import Projects from "app/components/Projects";
import Footer from "app/components/Footer";

export default function Index() {
    return (
        <div>
            <Header />
            <Hero />
            <Team />
            <Projects />
            <Footer />
        </div>
    );
}
