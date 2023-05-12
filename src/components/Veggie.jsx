import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './UI/Card/Card';
import Gradient from './UI/Gradient/Gradient';
import Wrapper from './UI/Wrapper/Wrapper';

const Veggie = () => {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        try {
            const check = localStorage.getItem('veggie');
            if (check) {
                setVeggie(JSON.parse(check))
            }
            else {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9&tags=vegetarian`)
                const data = await api.json();
                localStorage.setItem('veggie', JSON.stringify(data.recipes))
                setVeggie(data.recipes);
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Wrapper>
                <h3>Veggie Picks</h3>
                <Splide options={{ perPage: 3, arrows: false, pagination: false, drag: 'free', gap: '5rem', }}>
                    {veggie?.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card key={recipe?.id}>
                                    <Link to={"/recipe/" + recipe.id}>
                                        <p>{recipe?.title}</p>
                                        <img src={recipe?.image} alt={recipe.title} />
                                    </Link>
                                    <Gradient />
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}

export default Veggie;