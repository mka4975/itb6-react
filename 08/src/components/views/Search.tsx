import * as React from "react";

interface PropTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSearch: (event: any) => void;
  searchTerm: string;
}

const Search = ({ onSearch, searchTerm }: PropTypes): JSX.Element => {
  return (
    <form onSubmit={onSearch}>
      <label>
        Seach:
        <input type="text" name="search" placeholder={searchTerm} />
      </label>
    </form>
  );
};

export default Search;
