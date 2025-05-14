import SearcIcon from "../assets/images/icon-search.svg";
import { useDictionary } from "../contexts/DictionaryContext";

function Search() {
  const { word, setWord, error, loading, handleSearch } = useDictionary();

  return (
    <section className="mt-[52px] mb-[45px] relative">
      <input
        name="search"
        id="search"
        type="text"
        placeholder="Search for any word…"
        className={`w-full py-[14px] md:py-5 px-6 text-base md:text-hs font-bold text-neutral-600 dark:placeholder:text-neutral-0 dark:text-neutral-0 dark:placeholder:opacity-25 bg-neutral-100 dark:bg-neutral-700 focus:outline-purple-900 focus:outline-1 rounded-[16px] ${
          error && "outline-1 outline-red-900"
        }`}
        disabled={loading}
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      {error && (
        <span className="text-red-900 text-base md:text-hs mt-2 block absolute -bottom-8 left-0">
          Whoops, can’t be empty…
        </span>
      )}
      <button
        aria-label="Search"
        onClick={handleSearch}
        className="cursor-pointer min-w-16 absolute right-0 top-1/2 -translate-y-1/2 h-full rounded-[16px] flex items-center justify-center"
      >
        <img src={SearcIcon} alt="Search Icon" />
      </button>
    </section>
  );
}

export default Search;
