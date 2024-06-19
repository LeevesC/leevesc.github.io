import { useMain } from "../contexts/MainContext";

function Aside() {
  const { sidebar, dispatch } = useMain();

  return (
    <aside className={`sidebar ${sidebar && "active"}`}>
      <div className="header">
        <figure className="header__avatarbox">
          <img
            src="/assets/side_images/my-avatar.png"
            alt="Leeves Chou"
            width="80"
          />
        </figure>
        <div className="header__content">
          <h1 className="header__title" title="Leeves Chou">
            Leeves Chou
          </h1>
          <p className="header__subtitle">Web developer / Product manager</p>
        </div>
        {/* responsive button */}
        <button
          className="header__btn"
          onClick={() => dispatch({ type: "sidebar" })}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="info">
        <div className="separator"></div>

        <ul className="info__container">
          <li className="info__item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="info__content">
              <p className="info__title">Email</p>
              <a href="#" className="info__link">
                leeves.chou@gmail.com
              </a>
            </div>
          </li>

          <li className="info__item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="info__content">
              <p className="info__title">Phone</p>
              <a href="tel:+12133522795" className="info__link">
                +(61) 047-8585-234
              </a>
            </div>
          </li>

          <li className="info__item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="info__content">
              <p className="info__title">Birthday</p>
              <time dateTime="1982-06-23">June 23, 1982</time>
            </div>
          </li>

          <li className="info__item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="info__content">
              <p className="info__title">Location</p>
              <address>Adelaide, SA, Australia</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social__container">
          <li className="social__item">
            <a className="social__link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://x.com/home"
              className="social__link"
              target="_blank"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social__item">
            <a href="#" className="social__link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
