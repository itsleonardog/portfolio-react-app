import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import { Navbar } from "./components/navbar";
import Skills from "./components/skills";
import Work from "./components/work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
