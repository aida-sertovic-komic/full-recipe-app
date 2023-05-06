import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import classes from './Search.module.css';

const Search = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }
    return (
        <form className={classes.formSearch} onSubmit={submitHandler}>
            <div className={classes.searchWrapper}>
                <FaSearch></FaSearch>
                <input
                    type="text"
                    className={classes.search}
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
            </div>
        </form>
    )
}

export default Search;