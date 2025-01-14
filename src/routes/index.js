import { BrowserRouter, Route, Routes } from "react-router";    

import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import CartPage from "../pages/CartPage";

const RoutesApp = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;