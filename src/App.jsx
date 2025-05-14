import { lazy, Suspense } from "react";
import { useDictionary } from "./contexts/DictionaryContext";

import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import SkeletonResult from "./components/SkeletonResult";

const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  const { word, results, loading } = useDictionary();

  return (
    <>
      <Header />

      <main className="container">
        <Search />

        <section className="container">
          {loading && <SkeletonResult />}

          <Suspense fallback={<div>Loading...</div>}>
            {!loading &&
              word &&
              !Array.isArray(results) &&
              results.title === "No Definitions Found" && <NotFound />}
          </Suspense>

          {!loading && Array.isArray(results) && results.length > 0 && (
            <Results />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
