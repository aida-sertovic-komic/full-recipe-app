import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './../../components/UI/Card/Card';
import Grid from './../../components/UI/Grid/Grid';
import './Searched.module.css';

const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results)
    }

    useEffect(() => {
        getSearched(params.searchTerm);
    }, [params.searchTerm])

    return (
        <Grid>
        {searchedRecipes.map((item) => {
            return (
                <Card key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Card>
            )
        })}
    </Grid>
    )
}

export default Searched;