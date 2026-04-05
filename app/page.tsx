import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import GitHubStats from "@/components/sections/GitHubStats";
import Hobbies from "@/components/sections/Hobbies";
import Contact from "@/components/sections/Contact";
import BackToTop from "@/components/common/BackToTop";

export default function HomePage() {
  return (
      <>
        {/* Each section uses its own id for smooth-scroll nav targeting */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <GitHubStats />
        <Hobbies />
        <Contact />

        {/* Fixed utility component */}
        <BackToTop />
      </>
  );
}