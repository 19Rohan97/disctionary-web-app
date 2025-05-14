import Moon from "../assets/images/icon-moon.svg";
import { useDictionary } from "../contexts/DictionaryContext";

export function DarkToggle() {
  const { isDark, toggleDarkMode } = useDictionary();

  return (
    <div className="dark-toggle">
      <label className="switch">
        <input
          type="checkbox"
          id="dark-checkbox"
          checked={isDark}
          onChange={toggleDarkMode}
        />
        <span className="slider"></span>
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          className="stroke-neutral-400 dark:stroke-purple-900"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  );
}
