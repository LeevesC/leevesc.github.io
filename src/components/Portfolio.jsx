import { useMain } from "../contexts/MainContext";

function Portfolio() {
  const { portfolio } = useMain();
  return (
    <article
      className={`projects ${portfolio && "active"}`}
      data-page="portfolio"
    >
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter__list">
          <li className="filter__item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>
          <li className="filter__item">
            <button data-filter-btn>Web design</button>
          </li>
          <li className="filter__item">
            <button data-filter-btn>Applications</button>
          </li>
          <li className="filter__item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>

        <div className="filter__select">
          <button className="filter__select-btn" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="filter__select-list">
            <li className="filter__select-item">
              <button data-select-item>All</button>
            </li>
            <li className="filter__select-item">
              <button data-select-item>Web design</button>
            </li>
            <li className="filter__select-item">
              <button data-select-item>Applications</button>
            </li>
            <li className="filter__select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ul className="project__list">
          <li
            className="project__item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project__img">
                <img
                  src="/assets/portfolio/project-1.jpg"
                  alt="finance"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Finance</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project__item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project__img">
                <img
                  src="/assets/portfolio/project-2.png"
                  alt="orizon"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Orizon</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;
