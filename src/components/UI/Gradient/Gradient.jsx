import classes from './Gradient.module.css';

const Gradient = (props) => {
    return (
        <div className={classes.gradient}>
            {props.children}
        </div>
    )
}

export default Gradient;