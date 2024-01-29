"use client";

import Image from "next/image";
import { useState } from "react";

import "./styles.scss";
import ItemMV from "../itemmv";

//@ts-ignore
const ItemGV = ({ image, brand, name, price }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="ItemGalleryView">
        <div
          className="ItemImageContainer"
        >
          <Image 
          src={image} 
          alt="sneaker" 
          className="ItemImage"
          onClick={() => {
            setModalOpen(true);
            console.log(modalOpen);
          }}
          ></Image>
        </div>
        <div className="ItemDetails">
          <p className="ItemBrand">{brand}</p>
          <p className="ItemName">{name}</p>
          <p className="ItemPrice">{price}</p>
        </div>
      </div>

      {modalOpen ? (
        <ItemMV image={image} brand={brand} name={name} price={price} />
      ) : null}
    </>
  );
};

export default ItemGV;
