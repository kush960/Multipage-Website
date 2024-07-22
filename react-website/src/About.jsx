import HeroSection from "./components/HeroSection";

const About = () => {
   const data = {
    name : "Kushagra Ankit",
    image : "./images/about1.svg",
   };
  return <HeroSection { ... data} />;
}

export default About;