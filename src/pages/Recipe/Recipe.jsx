import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Recipe.module.css';


const Recipe = () => {
    const [details, setDetails] = useState({});
    let params = useParams();

    const getRecipeInformation = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?&apiKey=${process.env.REACT_APP_KEY}`)
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        getRecipeInformation()
    }, [params.id])

    return (
        <div className={classes.recipeWrapper}>
            <div className={classes.imageWrapper}>
                <img className={classes.image} src={details.image} alt={details.title} />
            </div>
            <div>Ingredients and Instruction</div>
        </div>

    )
}

export default Recipe;