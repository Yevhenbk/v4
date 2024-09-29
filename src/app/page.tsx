import HomeView from "./components/HomeView";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ViewWrapper from "./components/ViewWrapper";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <HomeView>
      <Navbar />
      <Header />
      <ViewWrapper>
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </ViewWrapper>
      <Footer />
    </HomeView>
  );
};
