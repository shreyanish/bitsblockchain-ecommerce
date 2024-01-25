import Image from "next/image"
import './styles.scss'

import sneaker from '../../../public/assets/air-force-1-07.jpeg'

//@ts-ignore
const ItemGV = ({image, brand, name, price}) => {
    return (
        <div className="ItemGalleryView">
            <div className="ItemImageContainer">
                <Image src={image} alt="sneaker" className="ItemImage"></Image>
            </div>
            <div className="ItemDetails">
                <p className="ItemBrand">{brand}</p>
                <p className="ItemName">{name}</p>
                <p className="ItemPrice">{price}</p>
            </div>
        </div>
    )
}

export default ItemGV