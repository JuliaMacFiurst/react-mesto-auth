import mesto_logo from "../images/mesto_logo.svg";

export default function Header() {
  return (
    <header className="header page__header">
      <img className="header__logo" src={mesto_logo} alt="логотип Место" />
    </header>
  );
}
