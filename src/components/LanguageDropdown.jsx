import Dropdown from "../assets/images/icon-arrow-down.svg";
import { useDictionary } from "../contexts/DictionaryContext";

export function LanguageDropdown() {
  const { dropdown, handleDropdown, selectedFont, handleFont } =
    useDictionary();

  var font = "";

  if (selectedFont === "sans-serif") {
    font = "Sans Serif";
  } else if (selectedFont === "serif") {
    font = "Serif";
  } else if (selectedFont === "mono") {
    font = "Mono";
  }

  return (
    <div className="language-dropdown">
      <div className="selected-language" onClick={handleDropdown}>
        <span>{font}</span>
        <img src={Dropdown} alt="Dropdwon Icon" />
      </div>
      <div className={`other-languages ${dropdown ? "" : "invisible"}`}>
        <div
          className="option font-sans-serif"
          data-font="sans-serif"
          onClick={(e) => handleFont(e.currentTarget.dataset.font)}
        >
          Sans Serif
        </div>
        <div
          className="option font-serif"
          data-font="serif"
          onClick={(e) => handleFont(e.currentTarget.dataset.font)}
        >
          Serif
        </div>
        <div
          className="option font-mono"
          data-font="mono"
          onClick={(e) => handleFont(e.currentTarget.dataset.font)}
        >
          Mono
        </div>
      </div>
    </div>
  );
}
