import { useMain } from "../contexts/MainContext";

function Resume() {
  const {resume} = useMain();
  return (
    <article className={`resume ${resume && "active"}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="resume__timeline">
        <div className="resume__titlebox">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="resume__list">
          <li className="resume__item">
            <h4 className="h4 resume__item-title">
              University school of the arts
            </h4>
            <span>2007 — 2008</span>
            <p className="resume__item-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>

          <li className="resume__item">
            <h4 className="h4 resume__item-title">New york academy of art</h4>
            <span>2006 — 2007</span>
            <p className="resume__item-text">
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li>

          <li className="resume__item">
            <h4 className="h4 resume__item-title">
              High school of art and design
            </h4>
            <span>2002 — 2004</span>
            <p className="resume__item-text">
              Duis aute irure dolor in reprehenderit in voluptate, quila
              voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
            </p>
          </li>
        </ol>
      </section>

      <section className="resume__timeline">
        <div className="resume__titlebox">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="resume__list">
          <li className="resume__item">
            <h4 className="h4 resume__item-title">Creative director</h4>
            <span>2015 — Present</span>
            <p className="resume__item-text">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
              atque corrupti, quos dolores et qvuas molestias exceptur.
            </p>
          </li>

          <li className="resume__item">
            <h4 className="h4 resume__item-title">Art director</h4>
            <span>2013 — 2015</span>
            <p className="resume__item-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>

          <li className="resume__item">
            <h4 className="h4 resume__item-title">Web designer</h4>
            <span>2010 — 2013</span>
            <p className="resume__item-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ol>
      </section>

      <section className="skills">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills__list content-card">
          <li className="skills__item">
            <div className="skills__titlebox">
              <h5 className="h5">Web design</h5>
              <data value="80">80%</data>
            </div>
            <div className="skills__progress-bg">
              <div className="skills__progress-fill" style={{width: '80%'}}></div>
            </div>
          </li>

          <li className="skills__item">
            <div className="skills__titlebox">
              <h5 className="h5">Graphic design</h5>
              <data value="70">70%</data>
            </div>
            <div className="skills__progress-bg">
              <div className="skills__progress-fill" style={{width: '70%'}}></div>
            </div>
          </li>

          <li className="skills__item">
            <div className="skills__titlebox">
              <h5 className="h5">Branding</h5>
              <data value="90">90%</data>
            </div>
            <div className="skills__progress-bg">
              <div className="skills__progress-fill" style={{width: '90%'}}></div>
            </div>
          </li>

          <li className="skills__item">
            <div className="skills__titlebox">
              <h5 className="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>
            <div className="skills__progress-bg">
              <div className="skills__progress-fill" style={{width: '50%'}}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Resume;
