import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Things from "./components/Things"; 
import Me from "./components/Me"; 
import Home from "./components/Home"; 
import './styles/App.css'


export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Me />} />
        <Route path="/things" element={<Things />} />
      </Routes>
      <Contact />
    </Router>
  );
}
