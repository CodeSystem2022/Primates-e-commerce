import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "./views/Home";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./components/Auth/Auth";
import "./styles/index.scss";
import Footer from "./components/Footer/Footer";
import AllProducts from "./views/AllProducts";
import ProductDetail from "./components/Product/ProductDetail";
import ManagerForm from "./components/ManagerForm/ManagerForm";
import CartView from "./views/Cart";
import Orders from "./views/Orders";

function App() {
    const Wrapper = ({ children }) => {
        const location = useLocation();
        useLayoutEffect(() => {
            document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);
        return children;
    };
    return (
        <Router>
            <Wrapper>
                <NavBar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" exact element={<Auth />} />
                    <Route path="/products" exact element={<AllProducts />} />
                    <Route
                        path="/products/:id"
                        exact
                        element={<ProductDetail />}
                    />
                    <Route
                        path="/manager/products"
                        exact
                        element={<ManagerForm />}
                    />
                    <Route path="/cart" exact element={<CartView />} />
                    <Route path="/orders" exact element={<Orders />} />
                </Routes>
                <Footer />
            </Wrapper>
        </Router>
    );
}

export default App;
