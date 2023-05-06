import Cuisine from "./Cuisine/Cuisine";
import Home from "./Home";
import { Route, Routes } from 'react-router-dom';
import Search from "./Search/Search";

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:name' element={<Cuisine />} />
            <Route path='/search/:searchTerm' element={<Search/>} />
        </Routes>

    )
}

export default Pages;