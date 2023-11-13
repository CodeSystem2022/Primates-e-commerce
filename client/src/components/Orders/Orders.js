import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../controllers/order";

const OrdersContainer = () => {
    const { orders, isOrderLoading } = useSelector((state) => state.orders);
    const { user } = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders());
    }, []);

    return (
        <div className="ordersContainer">
            <div className="ordersIntro">
                <h2>¡Hola {user?.name}!</h2>
                <p>Estas son tus ordenes de compras:</p>
            </div>

            <div className="ordersList">
                {isOrderLoading ? (
                    <span
                        style={{
                            textAlign: "center",
                            height: "50vh",
                            fontSize: "20px",
                        }}
                    >
                        Cargando...
                    </span>
                ) : orders.length === 0 ? (
                    <span
                        style={{
                            textAlign: "center",
                            height: "50vh",
                            fontSize: "20px",
                        }}
                    >
                        No tienes ordenes pendientes.
                    </span>
                ) : (
                    orders?.map((order) => (
                        <div key={order.orderId} className="ordersListItem">
                            <div className="ordersListItemInfo">
                                <span>Número de orden: {order.orderId}</span>
                                <ul>
                                    {order.products.map((product) => (
                                        <li>
                                            Producto: {product.name} Unidades:{" "}
                                            {product.cant}
                                        </li>
                                    ))}
                                </ul>
                                <h5>Fecha de emisión: {order.date}</h5>
                            </div>
                            <img src="https://cdn.shopify.com/s/files/1/0588/0070/1647/files/large-logo-desktop_1944x.png?v=1647908375"></img>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default OrdersContainer;
