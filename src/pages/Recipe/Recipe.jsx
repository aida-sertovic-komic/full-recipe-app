import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Recipe.module.css';


const Recipe = () => {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('ingredients');
    const [ingredients, setIngredients] = useState([]);
    let params = useParams();

    const getRecipeInformation = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?&apiKey=${process.env.REACT_APP_KEY}`)
        const detailData = await data.json();
        setDetails(detailData);
        setIngredients(details?.extendedIngredients)
        console.log(ingredients)
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
                    <button value="ingredients" onClick={(input) => {
                        setActiveTab(input.target.value)

                    }} >Ingredients</button>
                    <button value="instructions" onClick={(input) => {
                        setActiveTab(input.target.value)
                    }}>Instructions</button>
                </div>
                {activeTab === 'ingredients' ? <div className={classes.ingredients}>{ingredients?.map((item) => <li key={item.id}>{item.original}</li>)}</div> : <div dangerouslySetInnerHTML={{__html:details?.instructions}} className={classes.ingredients}></div>}
            </div>
        </div>

    )
}

export default Recipe;