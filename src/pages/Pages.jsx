import Cuisine from "./Cuisine/Cuisine";
import Home from "./Home";
import { Route, Routes } from 'react-router-dom';

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:name' element={<Cuisine />} />
        </Routes>

    )
}

export default Pages;