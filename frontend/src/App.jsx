// import components
import {Home} from "./pages/Home";
import Navbar from "./Layouts/Navbar";
import Skills from "./pages/Skills";
import Service from "./pages/Services";
import Projects from "./pages/Projects";
// import Testimonials from "./components/Testimonials";
// import Hireme from "./components/Hireme";
import Contact from "./pages/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Home />
      <Skills />
      <Service />
      <Projects />
      {/*<Testimonials />*/}
      {/*<Hireme />*/}
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Evgeny Eysner</h6>
        <p>Softeis © All CopyRights Reserved 2025</p>
      </footer>
    </div>
  );
};

export default App;
