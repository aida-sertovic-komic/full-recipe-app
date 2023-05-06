import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

import classes from './Category.module.css';
import StyledLink from '../UI/StyledLink/StyledLink';

const Category = () => {
    return(
        <div className={classes.category}>
            <StyledLink title={'Italian'}>
                <FaPizzaSlice />
            </StyledLink>
            <StyledLink title={'American'}>
                <FaHamburger />
            </StyledLink>
            <StyledLink title={'Thai'}>
                <GiNoodles/>
            </StyledLink>
            <StyledLink title={'Japanese'}>
                <GiChopsticks/>
            </StyledLink>
        </div>
    )
}

export default Category;