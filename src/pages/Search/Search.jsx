import classes from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <form className={classes.formSearch}>
            <div className={classes.searchWrapper}>
                <FaSearch></FaSearch>
                <input type="text" className={classes.search} />
            </div>
        </form>
    )
}

export default Search;