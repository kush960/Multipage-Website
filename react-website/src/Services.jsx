import { useGlobalContext } from "./context";


const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);
  return  <Wrapepr classname="section">
    <h2 className="common-heading"> Our Services</h2>
  </Wrapepr>;
};

const Wrapepr = styled.section``;

export default Services;