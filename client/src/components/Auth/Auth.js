import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reg } from "../../controllers/auth";

const initialState = {
    email: "",
    password: "",
    name: "",
    lastname: "",
    phone: "",
    image: "",
};

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignUp, setIsSignedUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [passError, setPassError] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignedUp(!isSignUp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const logData = {
            email: formData.email,
            password: formData.password,
        };

        if (formData.password.length < 6) {
            setPassError(true);
        } else {
            !isSignUp
                ? dispatch(login(logData, navigate, setLoginError))
                : dispatch(reg(formData, navigate));
        }
    };

    return (
        <div className="sectionContainer">
            <div className="formContainer">
                <h2>{isSignUp ? "REGISTRATE" : "INICIAR SESIÓN"}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña*"
                        onChange={handleChange}
                    />
                    {isSignUp && (
                        <>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre*"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Apellido*"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Teléfono*"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="image"
                                placeholder="Avatar (Imagen URL)*"
                                onChange={handleChange}
                            />
                        </>
                    )}
                    <button className="button" type="submit">
                        {isSignUp ? "REGISTRATE" : "INICIAR SESIÓN"}
                    </button>
                </form>

                {passError && !loginError ? (
                    <span className="errorMessage">
                        La contraseña debe tener mínimo 6 carácteres
                    </span>
                ) : loginError ? (
                    <span className="errorMessage">
                        Usuario o contraseña incorrectos, vuelva a intentarlo.
                    </span>
                ) : null}
            </div>
            <div className="registerButton">
                <h2>¿Por qué crear una cuenta?</h2>
                <p>
                    Con tus datos podremos enviar el producto a dónde
                    especifíques, enviarte información de la orden de compra y
                    brindarte atención en caso de que tengas alguna duda
                </p>
                <button className="button" onClick={switchMode}>
                    {isSignUp
                        ? "YA TIENES CUENTA? INICIA SESIÓN"
                        : "NO TIENES CUENTA? REGISTRATE!"}
                </button>
            </div>
        </div>
    );
};

export default Auth;
