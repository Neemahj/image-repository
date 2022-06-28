import { useState } from "react";
import { MdOutlineImageSearch } from "react-icons/md";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }; 

  return (
    <div className="search-ctn">
      <MdOutlineImageSearch className="search-icon" />
      <input
        type="search"
        onChange={handleSearch}
        value={search}
        placeholder="Search image..."
      />
    </div>
  );
};

export default Search;
