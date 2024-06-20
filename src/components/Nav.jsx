import { useMain } from "../contexts/MainContext";

function Nav() {
  const { about, resume, portfolio, dispatch } = useMain();
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <button
            className={`navbar__item-link ${about && "active"}`}
            onClick={() => dispatch({ type: "about" })}
          >
            About
          </button>
        </li>

        <li className="navbar__item">
          <button
            className={`navbar__item-link ${resume && "active"}`}
            onClick={() => dispatch({ type: "resume" })}
          >
            Resume
          </button>
        </li>

        <li className="navbar__item">
          <button
            className={`navbar__item-link ${portfolio && "active"}`}
            onClick={() => dispatch({ type: "portfolio" })}
          >
            Projects
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
