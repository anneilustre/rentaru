import { FaSistrix } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search">
      <span className="search-icon"><FaSistrix /></span>
      <input
        id="fullTextInput"
        type="text"
        placeholder="Search for a place"
        className="search-input"
      />
    </div>
  );
};

export default Search;
