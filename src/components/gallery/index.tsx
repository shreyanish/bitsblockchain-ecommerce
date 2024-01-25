import "./styles.scss";
import shoedata from "../../data/shoedata";

import ItemGV from "../itemgv";

const Gallery = ({}) => {
    
  const shoearray = shoedata.map((shoe) => {
    return (
      <ItemGV
        image={shoe.image}
        brand={shoe.brand}
        name={shoe.name}
        price={shoe.price}
      />
    );
  });

  return <div className="Gallery">{shoearray}</div>;
};

export default Gallery;
