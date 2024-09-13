const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={onFilterChange} />
      </label>
    </div>
  );
};
export default SearchBox;
