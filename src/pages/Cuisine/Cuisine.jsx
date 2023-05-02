import classes from './Cuisine.module.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results)
    }

    return <div>

        </div>

    
}

export default Cuisine;