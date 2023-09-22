import searchIcon from '../assets/Search.svg';

const Search = ({ handleSearchChange, handleSearch, search }) => {
  return (
    <div>
      <form className="mt-4 relative mb-10 md:mb-14" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Search images by tags... e.g 'sports'"
          className="text-[0.75rem] md:text-sm py-2 md:py-3 px-4 border-none font-mono outline-none rounded-lg w-[65vw] md:w-[50vw] lg:w-[40vw] opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-gray-200"
          onChange={handleSearchChange}
        />
        <img
          alt="search"
          src={searchIcon}
          className="h-4 w-4 absolute top-[50%] -translate-y-1/2 right-4 cursor-pointer"
          type="button"
          onClick={handleSearch}
        />
      </form>
    </div>
  );
};

export default Search;
