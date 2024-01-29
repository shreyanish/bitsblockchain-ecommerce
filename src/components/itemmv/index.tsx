import Image from "next/image";

import "./styles.scss";

//@ts-ignore
const ItemMV = ({image, brand, name, price }) => {
  return (
    <div className="ItemModalContainer">
      <div className="ItemModalView">
        <div className="ImageContainer">
          <Image 
            src={image} 
            width={0}
            height={0}
            alt="shoe"
            className="ItemImage"
          ></Image>
        </div>
        <div className="ItemDetails">
          <div className="CloseButton">
            <p className="CloseText">Close</p>
          </div>
          <div className="ItemBasic">
            <p className="Brand">{brand}</p>
            <p className="Name">{name}</p>
            <p className="Price">{price}</p>
          </div>
          <div className="ItemDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Mollitia qui corrupti temporibus nobis,<br /> aliquid perferendis non repellat quis praesentium beatae <br /> nisi, nihil dolorem dolore ullam! Istehr iusto nemo explicabo, <br /> natus officiis, eos magni cupiditate voluptatem quos <br /> quibusdam quis qui, ab provident nostrum! <br /> Temporibus iusto mollitia, modi optio ipsam <br /> exercitationem. Aliquid.
          </div>
          <div className="BuyNowButton">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemMV;
