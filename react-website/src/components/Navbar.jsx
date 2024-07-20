import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return <Nav>
    <div className="menuIcons">
        <ul className="navbar-list">
            <li>
                <NavLink to="/"> Home </NavLink>
            </li>
            <li>
            <NavLink to="/about"> About </NavLink>
            </li>
            <li>
            <NavLink to="/services"> Services </NavLink>
            </li>
            <li>
            <NavLink to="/contact"> Contact </NavLink>
            </li>
        </ul>
    </div>
  </Nav>
};

const Nav = styled.nav

export default Navbar;
