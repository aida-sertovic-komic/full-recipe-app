import { Route, Routes } from 'react-router-dom';

import Cuisine from './Cuisine';
import Home from './Home"';
import Recipe from './Recipe/Recipe';
import Searched from './Searched';

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:name' element={<Cuisine />} />
            <Route path='/searched/:searchTerm' element={<Searched />} />
            <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>

    )
}

export default Pages;