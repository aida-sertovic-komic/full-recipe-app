import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Grid from '../components/UI/Grid/Grid';
import Card from '../components/UI/Card/Card';

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&cuisine=${name}&number=16`);
        const recipes = await data.json();
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCuisine(params.name);
    }, [params.name]);

    return <Grid>
        {cuisine.map((item) => {
            return (
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                        <img src={item.image} alt={item.title} />
                        <span>{item.title}</span>
                    </Link>
                </Card>
            )
        })}
    </Grid>


}

export default Cuisine;

