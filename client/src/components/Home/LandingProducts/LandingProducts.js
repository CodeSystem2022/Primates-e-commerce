import React from "react";
import { Link } from "react-router-dom";
import LandingProductsItem from "./LandingProductsItem/LandingProductsItem";

const LandingProducts = () => {
    return (
        <div className="landingProductsContainer">
            <div id="catalogueItemIntro">
                <h5>Buscas algo más?</h5>
                <p>
                    Mira todos nuestros Productos
                    y encuentra lo que estás buscando <br />
                    <Link to={"/products"}>
                        <button>Ver Productos</button>
                    </Link>
                </p>
            </div>
            <LandingProductsItem image="https://schussmuller.com.py/wp-content/uploads/elementor/thumbs/CHAPAS-ACANALADAS-q7bne5xdpxox57bdity0yg3ey485826ku3992lc4y8.jpg" />
            <LandingProductsItem image="https://plafimsa.com/wp-content/uploads/2019/02/viga-ipr-hss-acero-estructural-D_NQ_NP_850906-MLM28650183081_112018-F.jpg" />
        </div>
    );
};

export default LandingProducts;
