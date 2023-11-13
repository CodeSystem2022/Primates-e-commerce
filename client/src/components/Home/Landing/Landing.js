import React from "react";
import { Link } from "react-router-dom";
import CatalogueItem from "./CatalogueItem/CatalogueItem";

const Landing = () => {
    return (
        <>
            <div className="portada">
                <img src="https://a1.eestatic.com/cronicavasca/2023/07/11/empresas/778182205_8176067_1706x960.jpg" />
                <div>
                    <h2>RESISTENCIA</h2>
                    <h3>CALIDAD Y CONFIANZA</h3>
                </div>
            </div>

            <div className="catalogue">
                <div className="catalogueItem" id="catalogueItemIntro">
                    <h5>Lo nuevo:</h5>
                    <p>
                        Nuestros materiales son producidos
                        con materia prima de primera calidad,
                        
                    </p>
                </div>
                <CatalogueItem
                    name="Ladrillos"
                    price="8600$"
                    image="https://cdn1.totalcommerce.cloud/metropolis/product-zoom/es/ladrillo-comun-1.webp"
                />
                <CatalogueItem
                    name="Cemento"
                    price="17499$"
                    image="https://arcencohogar.vtexassets.com/arquivos/ids/336923/1994314-1.jpg?v=638016126170000000"
                />
                <CatalogueItem
                    name="Arena Fina"
                    price="10000$"
                    image="https://arcencohogar.vtexassets.com/arquivos/ids/279188-800-800?v=637651612925400000&width=800&height=800&aspect=true"
                />
            </div>
        </>
    );
};

export default Landing;
