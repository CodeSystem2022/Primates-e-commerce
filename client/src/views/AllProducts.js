import React, { useState } from "react";
import ProductsContainer from "../components/AllProducts/ProductsContainer";
import ManagerForm from "../components/ManagerForm/ManagerForm";

const AllProducts = () => {
    const [currentId, setCurrentId] = useState(null);
    return (
        <>
            <ManagerForm currentId={currentId} setCurrentId={setCurrentId} />
            <ProductsContainer setCurrentId={setCurrentId} />
        </>
    );
};

export default AllProducts;
