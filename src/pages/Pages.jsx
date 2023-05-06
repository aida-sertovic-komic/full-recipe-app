import { Route, Routes } from 'react-router-dom';

import Cuisine from "./Cuisine/Cuisine";
import Home from "./Home";
import Searched from "./Searched/Searched";

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:name' element={<Cuisine />} />
            <Route path='/searched/:searchTerm' element={<Searched />} />
        </Routes>

    )
}

export default Pages;