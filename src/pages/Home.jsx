import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </>
  );
};

export default Home;
