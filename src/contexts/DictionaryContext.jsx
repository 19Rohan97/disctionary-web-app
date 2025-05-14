import { createContext, useContext, useEffect, useState } from "react";

const DictionaryContext = createContext();

const BASE_API = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

function DictionaryProvider({ children }) {
  const [word, setWord] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [selectedFont, setSelectedFont] = useState("sans-serif");
  const [isDark, setIsDark] = useState(false);

  async function handleSearch() {
    const trimmed = word.trim();
    if (!trimmed) {
      setError(true);
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      setError(false);
      const res = await fetch(`${BASE_API}${trimmed}`);
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleDropdown() {
    setDropdown((dropdown) => !dropdown);
  }

  function handleFont(fontOption) {
    setSelectedFont(fontOption);
    setDropdown(false);

    applyFontToBody(fontOption);

    // Persist in localStorage
    localStorage.setItem("preferredFont", fontOption);
  }

  function applyFontToBody(font) {
    document.body.classList.remove("sans-serif", "serif", "mono");
    document.body.classList.add(font);
  }

  function toggleDarkMode() {
    setIsDark((prev) => {
      const newMode = !prev;
      // Apply to <html> or <body>
      document.documentElement.classList.toggle("dark", newMode);
      // Save to localStorage
      localStorage.setItem("darkMode", newMode ? "true" : "false");
      return newMode;
    });
  }

  useEffect(() => {
    const storedFont = localStorage.getItem("preferredFont");
    if (storedFont) {
      applyFontToBody(storedFont);
      setSelectedFont(storedFont);
      document.body.classList.add(storedFont);
    }
  }, []);

  useEffect(() => {
    const savedDark = localStorage.getItem("darkMode") === "true";
    setIsDark(savedDark);
    document.documentElement.classList.toggle("dark", savedDark);
  }, []);

  return (
    <DictionaryContext.Provider
      value={{
        word,
        setWord,
        results,
        setResults,
        loading,
        error,
        setError,
        dropdown,
        setDropdown,
        selectedFont,
        setSelectedFont,
        isDark,
        toggleDarkMode,
        handleSearch,
        handleDropdown,
        handleFont,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}

function useDictionary() {
  const context = useContext(DictionaryContext);

  if (context === undefined)
    throw new Error(
      "DictionaryContext was used outside the DictionaryProvider"
    );

  return context;
}

export { DictionaryProvider, useDictionary };
