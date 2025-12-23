import { FaArrowRight } from "react-icons/fa6";
import styles from "./Catering.module.scss";

const Catering = ({ catering }) => {
  return (
    <section className={styles.Catering}>
      <h2>
        Enjoy our delicious <br /> burgers together.
      </h2>

      <div className={styles.CateringImgContainer}>
        <div>
          <img
            className={styles.Test}
            src="/images/Foodrest-jpg-08.jpg"
            alt="Foodrest8"
          />
        </div>
        <div>
          <img
            className={styles.Test2}
            src="/images/Foodrest-jpg-09.jpg"
            alt="Foodrest9"
          />
        </div>
      </div>

      <div className={styles.CateringCircle}>
        <div>
          <h2>Catering</h2>
          <p>
            We offer reasonable pricing, great service, <br /> and a wide
            variety of cuisines – <br /> appetizers, meats seafoods, and more.
          </p>
        </div>

        {catering.map((cat) => (
          <div key={cat.id} className={styles.CateringCircleImg}>
            <img src={cat.image} alt={cat.alt} />
            <h4>{cat.title}</h4>
            <a className={styles.CateringLink} href="/">
              Contact us <FaArrowRight />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catering;
