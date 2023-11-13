import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct, updateProduct } from "../../controllers/products";

const initialState = {
    name: "",
    description: "",
    price: "",
    image: "",
};

const ManagerForm = ({ currentId, setCurrentId }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [managerFormData, setManagerFormData] = useState(initialState);
    const [managerFormError, setManagerFormError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = useSelector((state) =>
        currentId
            ? state?.products?.products.find((p) => p.productId === currentId)
            : null
    );

    useEffect(() => {
        if (product) {
            setManagerFormData({ ...product });
        }
    }, [product]);

    function handleCreation(e) {
        e.preventDefault();
        if (
            !managerFormData.name ||
            managerFormData.name.length < 3 ||
            !managerFormData.description ||
            !managerFormData.price ||
            !managerFormData.image
        ) {
            setManagerFormError(true);
        } else {
            currentId
                ? dispatch(updateProduct(currentId, { ...managerFormData }))
                : dispatch(createProduct({ ...managerFormData }, navigate));
        }
        clear();
    }
    const handleCreationChange = (e) => {
        setManagerFormData({
            ...managerFormData,
            [e.target.name]: e.target.value,
        });
    };
    const clear = () => {
        setCurrentId(null);
        setManagerFormData({
            name: "",
            description: "",
            price: "",
            image: "",
        });
    };
    return (
        <>
            {user?.user.email !== "admin@admin.com" ? null : (
                <form className="managerForm" onSubmit={handleCreation}>
                    <h5>¡Bienvenido Administrador!</h5>
                    <label>Nombre del producto</label>
                    <input
                        name="name"
                        value={managerFormData.name}
                        type="text"
                        onChange={handleCreationChange}
                    ></input>
                    <label>Descripción</label>
                    <textarea
                        name="description"
                        value={managerFormData.description}
                        onChange={handleCreationChange}
                    ></textarea>
                    <label>Precio</label>
                    <input
                        name="price"
                        value={managerFormData.price}
                        type="number"
                        onChange={handleCreationChange}
                    ></input>
                    <label>Imagen</label>
                    <input
                        name="image"
                        value={managerFormData.image}
                        type="text"
                        onChange={handleCreationChange}
                    ></input>
                    <button type="submit">
                        {currentId ? "Editar" : "Crear"}
                    </button>
                    {managerFormError ? (
                        <span
                            className="errorMessage"
                            style={{ textAlign: "center" }}
                        >
                            Error al crear. Compruebe los datos y vuelva a
                            intentarlo.
                        </span>
                    ) : null}
                </form>
            )}
        </>
    );
};

export default ManagerForm;
