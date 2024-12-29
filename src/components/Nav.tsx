
// File: ./components/Home.tsx
import '../styles/Nav.css'
import fav from '/fav2.png'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="topNav">
            <div>
                <NavLink to="/"><img src={fav} alt="" /></NavLink>
            </div>
            <div>
                <NavLink to="/clicky" className="prettyLink">Clicky</NavLink>
                {/* <NavLink to="/things" className="prettyLink">Things</NavLink> */}
            </div>
        </div>
    );
}

export default Nav;