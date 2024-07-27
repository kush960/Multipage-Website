
import HeroSection from "./components/HeroSection";


const Home = () => {
 
  
  const data = {
    name : "Kushagra Ankit" ,
    image : "./images/hero.jpg",
  }
  return <HeroSection { ... data } />;
};

export default Home;