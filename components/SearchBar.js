
const SearchBar = ({ handleChange , handleSubmit , searchQuery}) => {

  return (
    <form onSubmit={handleSubmit} className="m-4 p-1 rounded-xl bg-white">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search for movies..."
        className="text-black p-2 rounded-xl border-none"
      />
      <button type="submit" className="p-2 rounded-2xl bg-blue-500 text-white">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
