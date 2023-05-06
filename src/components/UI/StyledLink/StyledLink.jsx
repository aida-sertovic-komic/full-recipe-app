import { NavLink } from 'react-router-dom';
import classes from './StyledLink.module.css';

const StyledLink = (props) => {
    return (
        <NavLink className={({ isActive }) => (isActive ? classes.styledLink : classes.noActive)} to = {`/cuisine/${props.title}`} >
            { props.children }
            < h4 className = { classes.title } > { props.title }</h4 >
        </NavLink >

    )
}

export default StyledLink;