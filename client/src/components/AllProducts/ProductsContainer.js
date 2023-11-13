import React, { useEffect } from "react";
import ProductsContainerItem from "./ProductsContainerItem/ProductsContainerItem";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../controllers/products";

const ProductsContainer = ({ setCurrentId }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);
    const { isLoading, products } = useSelector((state) => state.products);

    if (!products.length && !isLoading) return "No hay publicaciones";

    return (
        <div className="productsBody">
            <div className="headTitle">
                <h2>Todos nuestros Productos</h2>
            </div>
            <div className="productsList">
                {products.map((product) => {
                    return (
                        <ProductsContainerItem
                            key={product.productId}
                            product={product}
                            setCurrentId={setCurrentId}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProductsContainer;
