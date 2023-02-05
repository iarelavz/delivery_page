import { useState } from "react";

function SearchBar({ onSubmit}){  //get the input and sends to tab component to do the search
    const [term, setTerm] = useState('');
     
    
    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (<div>
                <form onSubmit={handleFormSubmit}>
                    <input  className="searchbar" placeholder="Keresés..." value={term} onChange={handleChange}/>
                </form>
            </div>)
}

export default SearchBar;