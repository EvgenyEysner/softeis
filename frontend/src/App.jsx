// import components
import {Home} from "./Pages/Home";
import Navbar from "./Layouts/Navbar";
import Skills from "./Pages/Skills";
import Service from "./Pages/Services";
import Projects from "./Pages/Projects";
// import Testimonials from "./components/Testimonials";
// import Hireme from "./components/Hireme";
import Contact from "./Pages/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import {content} from "./Content.js";

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
        <p>{content.Footer.text}</p>
      </footer>
    </div>
  );
};

export default App;
