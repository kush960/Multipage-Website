import { useGlobalContext } from "./context";

const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);
  return  <Wrapepr classname="section">
  <h2 className="common-heading"> Our Services</h2>
  <div className="continer grid grid-three-column">
    {
      services.map((curElem) => {
        const{ id, name, image, description } = curElem;
        return (
          <div  key={id} className="card">
            <figure>
              <img src={image} alt={name} />
            </figure>
            <div className="card-data">
              <h3> {name}</h3>
              <p>{ description }</p>
              <NavLink to="/services">
                <Button> Read More </Button>
              </NavLink>
            </div>
          </div>
        )
      })
    }
  </div>
</Wrapepr>;
};

const Wrapepr = styled.section``;

export default Services;