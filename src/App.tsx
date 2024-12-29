import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Contact from "./components/Contact";
// import Things from "./components/Things"; 
import Home from "./components/Home"; 
import Clicky from "./components/Clicky"; 
import './styles/App.css'


export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clicky" element={<Clicky />} />
        {/* <Route path="/things" element={<Things />} /> */}
      </Routes>
      <Contact />
    </Router>
  );
}
