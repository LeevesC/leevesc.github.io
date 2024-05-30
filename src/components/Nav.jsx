import { useMain } from "../contexts/MainContext";

function Nav() {
  const { about, resume, portfolio, dispatch } = useMain();
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${about && "active"}`}
            onClick={() => dispatch({ type: "about" })}
          >
            About
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${resume && "active"}`}
            onClick={() => dispatch({ type: "resume" })}
          >
            Resume
          </button>
        </li>

        <li className="navbar-item">
        <button
            className={`navbar-link ${portfolio && "active"}`}
            onClick={() => dispatch({ type: "portfolio" })}
          >
            Portfolio
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
