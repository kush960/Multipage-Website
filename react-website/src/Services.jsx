import { useGlobalContext } from "./context";


const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);
  return  <Wrapepr classname="section">
    <h2> Our Services</h2>
  </Wrapepr>
}

export default Services;