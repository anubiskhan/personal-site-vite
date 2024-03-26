import fav from '/fav2.png'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Things from "./components/Things"; // Make sure to create this component
import Me from "./components/Me"; // Make sure to create this component


export default function App() {
  return (
    <Router>
      <Link className="iconGridItem" to="/me">Me</Link>
      <Link className="iconGridItem" to="/things">Things</Link>
      <div className="homeContainer">
        <div className="sideContainer">
          <div className="sideInnerTop">
            <h1>Kelly Schroeder</h1>
            <img src={fav} alt="" />
          </div>
        <Routes>
          <Route path="/things" element={<Things />} />
          <Route path="/me" element={<Me />} />
        </Routes>

        </div>

      </div>
    </Router>
  );
}
