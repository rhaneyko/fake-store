import { BrowserRouter, Route, Routes } from "react-router";    

import HomePage from "../pages/HomePage";

const RoutesApp = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;