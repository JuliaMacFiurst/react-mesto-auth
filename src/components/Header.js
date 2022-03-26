import React from 'react';
import mesto_logo from "../images/mesto_logo.svg";

import { Link, useLocation } from 'react-router-dom';

function Header({ loggedIn, email, onSignOut }) {

  const { pathname } = useLocation();
  const [navBarIsOpen, setNavBarIsOpen] = React.useState(false);

  const textBar = pathname === `${"/sign-in"}` ? "Войти" : "Регистрация";
  const linkRoute = `${pathname === "/sign-in" ? "/sign-up" : "/sign-in"}`;


  function handleToggleMenu() {
    setNavBarIsOpen(!navBarIsOpen);
  }

  function handleSignOut() {
    setNavBarIsOpen(false);
    onSignOut();
  }

  return (
    <header className={loggedIn ? 'header header_column-reverse' : 'header'}>
      {loggedIn &&
        (
          <div
            className={navBarIsOpen ? 'nav-bar__container nav-bar__container_opened' : 'nav-bar__container'}
          >
            <address
              className="header__email"
            >
              {email && email}
            </address>
            <button
              className="header__logout"
              type="button"
              onClick={handleSignOut}
            >
              Выйти
            </button>
          </div>
        )
      }
      <div
        className="header__container"
      >
        <img className="header__logo" src={mesto_logo} alt="логотип Место" />
        {loggedIn &&
          (
            <button
              className={navBarIsOpen ? 'nav-bar__button nav-bar__button_opened' : 'nav-bar__button'}
              type="button"
              aria-label="меню"
              onClick={handleToggleMenu}
            />
          )
        }
        {!loggedIn &&
          (<nav>
           {loggedIn ? (
        <>
          <h2 className="header__email">{email}</h2>
          <Link to="" onClick={onSignOut} className="header__logout">
            Выйти
          </Link>
        </>
      ) : (
        <>
          <Link to={linkRoute} className="header__auth-link">
            {textBar}
          </Link>
        </>
      )}
          </nav>
        )
        }
      </div>

    </header>
  )
}

export default Header;



// import mesto_logo from "../images/mesto_logo.svg";
// import React from "react";
// import { Link } from "react-router-dom"; 

// export default function Header({ loggedIn, children}) {
  
//   return (
//     <header className={loggedIn ? 'header header_column-reverse' : 'header'}>
//       <Link to="/">
//         <img className="header__logo" src={mesto_logo} alt="логотип Место" />
//       </Link>
//       {children}
//     </header>
//   );
// }
