import { BrowserRouter, Route, Routes } from "react-router";    

import HomePage from "../pages/HomePage";
import CategoriesPage from '../pages/CategoriesPage'

const RoutesApp = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/categories" element={<CategoriesPage/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;