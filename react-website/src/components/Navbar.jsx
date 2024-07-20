import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {

    const Nav = styled.nav`
    .navbar-list{
       display: flex;
       gap: 4.8 rem;


       li{
         list-style: none;
         
         .navbar-link{
          &:link,
          &:visited{
            padding-left: 15px;
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem; 
            text-transformation: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
 
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
       }
       }
    }
    `;

  return <Nav>
    <div className="menuIcons">
        <ul className="navbar-list">
            <li>
                <NavLink className="navbar-link" to="/"> Home </NavLink>
            </li>
            <li>
            <NavLink className="navbar-link" to="/about"> About </NavLink>
            </li>
            <li>
            <NavLink className="navbar-link" to="/services"> Services </NavLink>
            </li>
            <li>
            <NavLink className="navbar-link" to="/contact"> Contact </NavLink>
            </li>
        </ul>
    </div>
  </Nav>
};



export default Navbar;
