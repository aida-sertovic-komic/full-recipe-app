import { useEffect, useState } from "react";
import Wrapper from "./UI/Wrapper/Wrapper";
import Card from "./UI/Wrapper/Card/Card";

const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        try {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`)
            const data = await api.json();
            setPopular(data.recipes);
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {popular?.map((recipe) => {
                return (
                    <Wrapper key={recipe?.id}>
                        <h3>Popular Picks</h3>
                        {popular?.map((recipe) => {
                            return (
                                <Card>
                                    <p>{recipe?.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                </Card>
                            );
                        })}
                    </Wrapper>
                )
            })
            }
        </div>
    )
}

export default Popular;

