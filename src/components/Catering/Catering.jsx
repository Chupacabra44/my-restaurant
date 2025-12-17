import { FaArrowRight } from "react-icons/fa6";
import styles from "./Catering.module.scss";

const Catering = ({ cat }) => {
  return (
    <div key={cat.id} className={styles.CateringCircleImg}>
      <img src={cat.image} alt="" />
      <h4>{cat.title}</h4>
      <a className={styles.CateringLink} href="/">
        Contact us <FaArrowRight />
      </a>
    </div>
  );
};

export default Catering;
