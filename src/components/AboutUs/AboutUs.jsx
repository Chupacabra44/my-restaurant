import { Link } from "react-router-dom";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <>
      <section className={styles.About}>
        <h1>About Us</h1>
        <ul className={styles.AboutLinks}>
          <li className={styles.AboutLink}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.AboutLink}>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
        <div className={styles.CustomShape}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              style={{ fill: "#fff9f4" }}
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
