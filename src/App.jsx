import { useDictionary } from "./contexts/DictionaryContext";

import Header from "./components/Header";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Results from "./components/Results";

function App() {
  const { word, results, loading } = useDictionary();

  return (
    <>
      <Header />

      <main className="container">
        <Search />

        <section className="container">
          {loading && <p className="text-center mt-5">Loading...</p>}

          {word &&
            !Array.isArray(results) &&
            results.title === "No Definitions Found" && <NotFound />}

          {Array.isArray(results) && results.length > 0 && <Results />}
        </section>
      </main>
    </>
  );
}

export default App;
