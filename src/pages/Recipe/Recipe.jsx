import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Recipe.module.css';


const Recipe = () => {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('ingredients');
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
            <div className={classes.ingredientWrapper}>
                <div className={classes.buttons}>
                    <button onClick={() => {
                        setActiveTab("ingredients")
                    }} >Ingredients</button>
                    <button onClick={() => {
                        setActiveTab("instructions")
                    }}>Instructions</button>
                </div>
                <div className={classes.instructions}>{details.instructions}</div>
            </div>
        </div>

    )
}

export default Recipe;