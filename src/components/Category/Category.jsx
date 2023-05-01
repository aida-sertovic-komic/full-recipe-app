import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

import classes from './Category.module.css';

const Category = (props) => {
    return(
        <div className={classes.category}>
            <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink>
                <GiNoodles to={'/cuisine/Thai'}/>
                <h4>Thai</h4>
            </NavLink>
            <NavLink>
                <GiChopsticks to={'cuisine/Japanese'}/>
                <h4>Japanese</h4>
            </NavLink>
        </div>
    )
}

export default Category;