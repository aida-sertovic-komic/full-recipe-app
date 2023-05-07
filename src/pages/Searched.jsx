import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/UI/Card/Card';
import Grid from '../components/UI/Grid/Grid';

const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&query=${name}&number=12`);
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
                    <span>{item.title}</span>
                </Card>
            )
        })}
    </Grid>
    )
}

export default Searched;