import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-green-500 py-8 px-4 border-b-2 border-green-50 flex flex-col md:flex-row justify-between items-center md:justify-between">
      <Logo />
      <Navigation />
    </header>
  );
}
