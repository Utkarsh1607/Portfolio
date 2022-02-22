
import './App.css';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Proj from './components/Proj/Proj';
import Skill from './components/Skill/Skill';
import Contact from "./components/contect/Contact";
import About from './components/About/About';



function App() {
  return (
    <>
      <Navbar />
      <Home />
    <About/>
      <Skill />
      <Proj />
      <Contact />
    </>
  );
}

export default App;
