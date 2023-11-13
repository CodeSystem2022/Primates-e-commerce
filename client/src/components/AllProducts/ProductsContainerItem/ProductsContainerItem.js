import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../controllers/products";

const ProductsContainerItem = ({ product, setCurrentId }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const dispatch = useDispatch();

    function handleEdit() {
        setCurrentId(product.productId);
        window.scrollTo(0, 0);
    }
    return (
        <div className="productListItem">
            <div className="productImage">
                <Link to={`/products/${product.productId}`}>
                    <img src={product.image} alt={product.name} />
                </Link>
            </div>

            <div className="productText">
                <h5>{product.name}</h5>
                {user?.user.email === "admin@admin.com" && (
                    <div>
                        <button
                            onClick={handleEdit}
                            style={{
                                color: "darkgreen",
                                fontSize: "18px",
                                marginRight: "20px",
                            }}
                        >
                            Editar
                        </button>
                        <button
                            onClick={() =>
                                dispatch(deleteProduct(product.productId))
                            }
                            style={{
                                color: "darkred",
                                fontSize: "18px",
                            }}
                        >
                            Borrar
                        </button>
                    </div>
                )}
                <div>
                    <p>{product.price} $</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsContainerItem;
