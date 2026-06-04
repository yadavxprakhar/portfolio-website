import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Blogs from "@/components/sections/Blogs";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import GitHubStats from "@/components/sections/GitHubStats";
import TerminalConsole from "@/components/sections/TerminalConsole";
import Hobbies from "@/components/sections/Hobbies";
import Contact from "@/components/sections/Contact";
import BackToTop from "@/components/common/BackToTop";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Blogs />
            <Education />
            <Certifications />
            <GitHubStats />
            <TerminalConsole />
            <Hobbies />
            <Contact />
            <BackToTop />
        </main>
    );
}