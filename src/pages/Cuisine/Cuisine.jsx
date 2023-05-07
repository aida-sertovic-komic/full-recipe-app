import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/UI/Card/Card';
import Grid from '../../components/UI/Grid/Grid';

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
                    {/* <Link /> */}
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Card>
            )
        })}
    </Grid>


}

export default Cuisine;

