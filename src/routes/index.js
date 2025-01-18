import { BrowserRouter, Route, Routes } from "react-router";    

import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";

const RoutesApp = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;