import { useMain } from "../contexts/MainContext";

function Aside() {
  const { sidebar, dispatch } = useMain();

  return (
    <aside className={`sidebar ${sidebar && "active"}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="/assets/side_images/my-avatar.png"
            alt="Leeves Chou"
            width="80"
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Leeves Chou">
            Leeves Chou
          </h1>
          <p className="title">Web developer / Product manager</p>
        </div>
        {/* responsive button */}
        <button
          className="info_more-btn"
          onClick={() => dispatch({ type: "sidebar" })}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="#" className="contact-link">
                leeves.chou@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">
                +(61) 047-8585-234
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">June 23, 1982</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Adelaide, SA, Australia</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://x.com/home"
              className="social-link"
              target="_blank"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
