import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import FoodButtons from "./components/FoodButtons/FoodButtons";
import styles from "./App.module.scss";

function App() {
  const [foodImages, setFoddImages] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [isActive, setIsActive] = useState("burgers");

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("foodImages.json");
        const responseSecond = await fetch("burgers.json");
        const responseThird = await fetch("breakfast.json");
        if (!response.ok) {
          throw new Error("No image!");
        }

        const data = await response.json();
        const dataSecond = await responseSecond.json();
        const dataThird = await responseThird.json();
        console.log(dataThird);
        setFoddImages(data);
        setBurgers(dataSecond);
        setBreakfast(dataThird);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchImages();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.Main}>
        <h1 className={styles.h1}>
          <span>SIZZLING BURGERS,</span>
          <br />
          Multiple Locations Near You!
        </h1>
        <div className={styles.OrderLinks}>
          <a href="/">Order Now</a>
          <a href="tel:+8888075000">(888) 807-5000</a>
        </div>
        <section style={{ marginTop: "150px", height: "100vh" }}>
          <div className={styles.imageGrid}>
            {foodImages.map((image) => (
              <img
                key={image.id}
                className={`${styles.imageItem} ${styles.slideUp}`}
                src={image.image}
                alt={image.alt}
              />
            ))}
          </div>
        </section>

        <section
          style={{
            marginTop: "150px",
            background: "#fff3e8",
            padding: "50px 0",
          }}
        >
          <div className={styles.ShapeContainer}>
            <img
              className={styles.Shape}
              src="/images/Shape-012.png"
              alt="Shape"
            />
            <div className={styles.Centered}>
              <h3>Our Menu</h3>
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
      </main>
    </>
  );
}

export default App;
