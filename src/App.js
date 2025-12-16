import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { useEffect, useState } from "react";

function App() {
  const [foodImages, setFoddImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("foodImages.json");
        if (!response.ok) {
          throw new Error("No image!");
        }

        const data = await response.json();
        console.log(data);
        setFoddImages(data);
        return data;
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
      </main>
    </>
  );
}

export default App;
