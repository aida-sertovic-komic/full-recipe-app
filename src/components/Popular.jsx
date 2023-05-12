import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './UI/Card/Card';
import Gradient from './UI/Gradient/Gradient';
import Wrapper from './UI/Wrapper/Wrapper';
const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        try {
            const check = localStorage.getItem('popular');
            if (check) {
                setPopular(JSON.parse(check))
            }
            else {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`)
                const data = await api.json();
                localStorage.setItem('popular', JSON.stringify(data.recipes))
                setPopular(data.recipes);
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{ perPage: 4, arrows: false, pagination: false, drag: 'free', gap: '5rem', }}>
                    {popular?.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Link to={"/recipe/" + recipe.id} >
                                    <Card key={recipe?.id}>
                                        <Link to={"/recipe/" + recipe.id}>
                                            <p>{recipe?.title}</p>
                                            <img src={recipe?.image} alt={recipe.title} />
                                        </Link>
                                        <Gradient />
                                    </Card></Link>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}

export default Popular;

