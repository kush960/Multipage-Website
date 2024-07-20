import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/button"; 
 const HeroSection = () => {
   return  (<Wrapper>
    <div className="container grid grid-two-colimn">
         {/* Below div is for content */}
        <div className="section-hero-data">
            <p className="hero-top-data">THIS IS ME</p>
            <h1 className="hero-heading"> KUSHAGRA ANKIT </h1>
            <p className="hero-para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum numquam blanditiis sit a, doloremque ipsum velit quo consequatur fugit vero in error. 
                Labore earum, id atque ipsa ducimus cum distinctio.
            </p>
        </div>
        <Button className="btn hireme-btn">
            <NavLink to="/contact"> GO </NavLink>
        </Button>
        {/* Below div is for image */}
        <div className="section-hero-image">
            <picture>
                <img src="./" alt="" ></img>
            </picture>
        </div>
    </div>
   </Wrapper>)
 };
 
 const Wrapper = styled.section``;
 export default HeroSection;