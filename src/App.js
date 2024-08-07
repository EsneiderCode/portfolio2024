import { useState, useRef, useCallback } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./app.css";
import HamburgerMenu from "./components/MenuHamburger";
function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  //For eye movement. 
  const handleMouseMove = useCallback((event) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const squareSize =25; 

      let x = event.clientX - containerRect.left - squareSize / 2;
      let y = event.clientY - containerRect.top - squareSize / 2;

      x = Math.max(0, Math.min(x, containerRect.width - squareSize));
      y = Math.max(0, Math.min(y, containerRect.height - squareSize));

      setPosition({ x, y });
    } 
  }, []);

  return (
    <div className="App" onMouseMove={handleMouseMove} >
      <div class="overlay"></div>
      <Header />
      <HamburgerMenu/>
      <Home  position={position} containerRef={containerRef}/>
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;