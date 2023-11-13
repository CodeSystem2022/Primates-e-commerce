import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart, removeProduct } from "../../controllers/carts";
import { addOrder } from "../../controllers/order";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cart, isCartLoading } = useSelector((state) => state.carts);

    useEffect(() => {
        dispatch(getCart());
    }, []);

    const handleRemove = (id, e) => {
        e.preventDefault();
        dispatch(removeProduct(id));
    };

    const prices = cart?.products?.map((product) => {
        return product.price * product.cant;
    });
    let total = 0;
    for (let i = 0; i < prices?.length; i++) {
        total += prices[i];
    }

    const handleOrder = () => {
        dispatch(addOrder());
        navigate("/orders");
    };

    return isCartLoading ? (
        "Cargando..."
    ) : (
        <>
            <div className="cartBody">
                <div className="cartContainer">
                    {cart?.products?.map((product) => (
                        <div className="cartItem" key={product.productId}>
                            <img src={product.image} alt={product.name} />
                            <div>
                                <h6>{product.name}</h6>
                                <span className="cartCant">
                                    Cantidad: {product.cant}
                                </span>
                                <span className="cartPrice">
                                    {product.price} $
                                </span>
                                <span className="cartCancel">
                                    <button
                                        onClick={(e) =>
                                            handleRemove(product.productId, e)
                                        }
                                    >
                                        X
                                    </button>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cartCheckout">
                    <span>Total: {total} $</span>
                    <button onClick={handleOrder}>Confirmar Compra</button>
                    <span
                        style={{
                            fontSize: "15px",
                            width: "70%",
                            textAlign: "center",
                            marginTop: "15px",
                        }}
                    >
                        Una vez confirmada la compra, la orden se emitirá,
                        comprueba que tengas todo lo que necesites!
                    </span>
                </div>
            </div>
        </>
    );
};

export default Cart;
