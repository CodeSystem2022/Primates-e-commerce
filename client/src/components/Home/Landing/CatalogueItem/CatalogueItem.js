import React from "react";
import { Link } from "react-router-dom";

const CatalogueItem = ({ name, image, price }) => {
    return (
        <div className="catalogueItem">
            <img src={image} />
            <div className="catalogueItemInfo">
                <p>{name}</p>
                <div>
                    <span>{price} </span>

                    <Link to={"/products"}>
                        <span>Ver en Catálogo</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CatalogueItem;
