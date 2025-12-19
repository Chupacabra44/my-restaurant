import FoodButtons from "../FoodButtons/FoodButtons";
import styles from "./Menu.module.scss";

const Menu = ({ isActive, setIsActive, burgers, breakfast }) => {
  return (
    <section
      style={{
        marginTop: "150px",
        background: "#fff3e8",
        padding: "100px 0",
      }}
    >
      <div className={styles.ShapeContainer}>
        <img className={styles.Shape} src="/images/Shape-012.png" alt="Shape" />
        <div className={styles.Centered}>
          <h2>Our Menu</h2>
        </div>
      </div>

      <FoodButtons setIsActive={setIsActive} />

      {isActive === "burgers" && (
        <div className={styles.BurgerContainer}>
          {burgers.map((burger) => (
            <div key={burger.id} className={styles.BurgerAndText}>
              <img
                className={styles.Burger}
                src={burger.image}
                alt={burger.alt}
                title={burger.title}
              />
              <div>
                <span>{burger.title}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {isActive === "breakfast" && (
        <div className={styles.BurgerContainer}>
          {breakfast.map((breakf) => (
            <div key={breakf.id} className={styles.BurgerAndText}>
              <img
                className={styles.Burger}
                src={breakf.image}
                alt={breakf.alt}
                title={breakf.title}
              />
              <div>
                <span>{breakf.title}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Menu;
