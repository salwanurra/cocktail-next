import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchBar = useRef(null);
  React.useEffect(() => {
    searchBar.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="searchCocktail">Search Your Favorite Cocktail</label>
          <input
            type="search"
            name="search-cocktail"
            id="searchCocktail"
            ref={searchBar}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;