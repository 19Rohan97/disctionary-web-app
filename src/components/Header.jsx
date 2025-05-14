import { LanguageDropdown } from "./LanguageDropdown";
import { DarkToggle } from "./DarkToggle";
import { Logo } from "./Logo";

function Header() {
  return (
    <header id="header" className="container">
      <Logo />

      <div className="flex items-center gap-4 md:gap-[26px]">
        <LanguageDropdown />

        <span className="divider text-neutral-300">|</span>

        <DarkToggle />
      </div>
    </header>
  );
}

export default Header;
