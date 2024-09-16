import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import fav from '/fav2.png'
import Things from "./components/Things"; // Make sure to create this component
import Me from "./components/Me"; // Make sure to create this component
import Home from "./components/Home"; // Make sure to create this component


export default function App() {
  return (
    <Router>
      <div className="topNav">
        <div>
        <Link to="/"><img src={fav} alt="" /></Link>        
        <h1>Kelly Schroeder</h1>
        </div>
      <div>
          <Link className="iconGridItem" to="/me">Me</Link>
          <Link className="iconGridItem" to="/things">Things</Link>
      </div>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Me />} />
          <Route path="/things" element={<Things />} />
        </Routes>
    </Router>
  );
}
