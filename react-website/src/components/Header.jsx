import { NavLink } from "react-router-dom";
import Navbar from  "./Navbar";

const Header = () => {
  return (
   <header>
    <NavLink to="/">
     <img src="./images/a.jpg" alt="Logo" />
    </NavLink>
    <Navbar />
   </header>
  );
};

export default Header;