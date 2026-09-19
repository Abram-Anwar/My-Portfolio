import Contact from "../components/Contacts/Contact";
import Footer from "../components/Footer/Footer";
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
        <Contact/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
