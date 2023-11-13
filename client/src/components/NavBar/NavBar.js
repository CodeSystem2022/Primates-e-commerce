import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import plazaIcon from "../../images/plaza";
import cartIcon from "../../images/cart";
import decode from "jwt-decode";
import { getCart } from "../../controllers/carts";

const NavBar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const { cart, isCartLoading } = useSelector((state) => state.carts);

    const [isOpen, setIsOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem("user")));
    }, [location]);

    const logout = () => {
        dispatch({ type: "LOGOUT" });

        navigate("/");

        setUser(null);
    };

    function handleClick() {
        setIsOpen(!isOpen);
    }

    function handleUserMobile(url) {
        navigate(`/${url}`);
    }

    return (
        <nav className="mainNav">
            <div className="navShip">
                <h6>¡Envíos gratis a todo el país!</h6>
            </div>
            <div className="navMenu">
                <button id="colorLink" onClick={() => handleClick()}>
                    {isOpen ? "Close" : "Menu"}
                </button>
                <div className={isOpen ? "navMenuList" : "navMenuListHidden"}>
                    <ul>
                        <Link to="/">
                            <li onClick={() => handleClick()}>INICIO</li>
                        </Link>
                        <Link to="/products">
                            <li onClick={() => handleClick()}>
                                TODOS LOS PRODUCTOS
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="navTitle">
                <Link to="/" onClick={() => setIsOpen(false)}>
                    <h1>ZONA LADRILLO</h1>
                </Link>
            </div>
            <ul className="navBarUserContainer">
                {user !== null ? (
                    <>
                        <div
                            className={
                                mobileMenu
                                    ? "navBarUser navBarUserTranslate"
                                    : "navBarUser"
                            }
                        >
                            <img alt={user?.user.name} src={user?.user.image} />
                            <h6 onClick={() => handleUserMobile("orders")}>
                                {user?.user.name + " " + user?.user.lastname}{" "}
                            </h6>
                            <div className="navBarUserButtonContainer">
                                <button
                                    onClick={() => handleUserMobile("cart")}
                                >
                                    {cartIcon}
                                    {isCartLoading
                                        ? "0"
                                        : `${
                                              !cart?.products?.length
                                                  ? "0"
                                                  : cart?.products?.length
                                          } `}
                                </button>
                                <button onClick={logout}>SALIR</button>
                            </div>
                        </div>
                        <div
                            className="navBarUserMobile"
                            onClick={() => setMobileMenu(!mobileMenu)}
                        >
                            {mobileMenu ? "Cerrar" : user?.user.name}
                        </div>
                    </>
                ) : (
                    <li>
                        <Link
                            id="colorLink"
                            to="/login"
                            onClick={() => setIsOpen(false)}
                        >
                            Iniciar Sesión
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
