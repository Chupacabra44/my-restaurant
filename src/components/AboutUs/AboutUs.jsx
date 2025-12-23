import { Link } from "react-router-dom";
import styles from "./AboutUs.module.scss";
import Catering from "../Catering/Catering";

const AboutUs = ({ catering = [] }) => {
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
      <Catering catering={catering} />

      <section className={styles.History}>
        <div className={styles.HistoryHeader}>
          <h1>Our History</h1>

          <p className={styles.HistoryIntro}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, bibendum
            penatibus consequat platea ad auctor, metus ultricies volutpat
            dictumst imperdiet tempus.
          </p>
        </div>

        <div className={styles.HistoryTabs}>
          <a href="#" className={styles.Active}>
            2015 – 2017
          </a>
          <a href="#">2018 – 2020</a>
          <a href="#">2021 – 2024</a>
        </div>

        <div className={styles.HistoryContent}>
          <div className={styles.HistoryImage}>
            <img src="/images/History-01.jpg" alt="Restaurant beginnings" />
          </div>

          <div className={styles.HistoryText}>
            <span className={styles.HistoryYear}>2015 – 2017</span>
            <h2>Humble Beginnings</h2>
            <p>
              FoodRest was founded in 2015 with a simple vision: to create a
              place where people could enjoy delicious, freshly prepared meals
              made with love. Starting as a small family-run restaurant.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
