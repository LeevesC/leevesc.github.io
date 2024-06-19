import { useMain } from "../contexts/MainContext";

function About() {
  const { about } = useMain();
  return (
    <article className={`about ${about && "active"}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about__text">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service__list">
          <li className="service__item">
            <div className="service__iconbox">
              <img
                src="/assets/about_me/icon-design.svg"
                alt="design icon"
                width="40"
              />
            </div>
            <div className="service__content">
              <h4 className="h4 service__content-title">Web design</h4>
              <p className="service__content-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>

          <li className="service__item">
            <div className="service__iconbox">
              <img
                src="/assets/about_me/icon-dev.svg"
                alt="Web development icon"
                width="40"
              />
            </div>
            <div className="service__content">
              <h4 className="h4 service__content-title">Web development</h4>
              <p className="service__content-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default About;
