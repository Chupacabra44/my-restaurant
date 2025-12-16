import { TbMinusVertical } from "react-icons/tb";
import styles from "./FoodButtons.module.scss";

const FoodButtons = ({ setIsActive }) => {
  const showBreakfast = () => {
    setIsActive("breakfast");
  };

  const showBurgers = () => {
    setIsActive("burgers");
  };

  return (
    <div className={styles.MenuButtons}>
      <TbMinusVertical className={styles.MinusVertical} />
      <button onClick={showBurgers} className={styles.MenuButton}>
        <span>Burger</span>
      </button>
      <TbMinusVertical className={styles.MinusVertical} />
      <button onClick={showBreakfast} className={styles.MenuButton}>
        <span>Breakfast</span>
      </button>
      <TbMinusVertical className={styles.MinusVertical} />
    </div>
  );
};

export default FoodButtons;
