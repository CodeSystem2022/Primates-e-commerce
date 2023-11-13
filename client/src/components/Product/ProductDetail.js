import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct } from "../../controllers/carts";
import { getProduct } from "../../controllers/products";

const ProductDetail = () => {
    const { product, isLoading } = useSelector((state) => state.products);

    const user = JSON.parse(localStorage.getItem("user"));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProduct(id));
    }, [id]);

    const handleCart = async () => {
        if (!user) {
            navigate("/login");
        } else {
            dispatch(addProduct(product));
            navigate(`/cart`);
        }
    };

    return isLoading ? (
        <div>
            <span></span>
        </div>
    ) : (
        <div className="prodContainer">
            <div className="prodImg">
                <img src={product?.image} />
            </div>
            <div className="prodInfo">
                <h1>{product?.name}</h1>
                <p>{product?.description}</p>
                <h3>{product?.price} $ </h3>
                <button onClick={handleCart}>Añadir al carrito</button>
                <span>Compralo en 6 cuotas sin interés</span>
                <span>Envío generalmente entre 3 a 5 días hábiles</span>
            </div>
        </div>
    );
};

export default ProductDetail;
