import mesto_logo from "../images/mesto_logo.svg";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header(props) {
  const { pathname } = useLocation();
  const { loggedIn, email, onSignOut } = props;

  return (
    <header className="header page__header">
      <Link to="/">
        <img className="header__logo" src={mesto_logo} alt="логотип Место" />
      </Link>
      {loggedIn ? (
        <React.Fragment>
          <div className="header__auth">
            <p className="header__email">{email}</p>
            <button className="header__logout" onClick={onSignOut}>
              Выйти
            </button>
          </div>
        </React.Fragment>
      ) : (
        <Link
          className="header__auth-link"
          to={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}
        >
          {pathname === "/sign-in" ? "Регистрация" : "Войти"}
        </Link>
      )}
    </header>
  );
}
