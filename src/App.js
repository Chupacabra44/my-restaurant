import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import FoodButtons from "./components/FoodButtons/FoodButtons";
import styles from "./App.module.scss";
import Catering from "./components/Catering/Catering";
import CarouselReview from "./components/CarouselReview/CarouselReview";
import AnimatedCounter from "./components/AnimatedCounter/AnimatedCounter";
import Accordion from "./components/Accordion/Accordion";
import AccordionTabs from "./components/AccordionTabs/AccordionTabs";
import faq from "./faq.js";
import Partners from "./components/Partners/Partners.jsx";

function App() {
  const [foodImages, setFoddImages] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [catering, setCatering] = useState([]);
  const [isActive, setIsActive] = useState("burgers");
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("General Questions");

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("foodImages.json");
        const responseSecond = await fetch("burgers.json");
        const responseThird = await fetch("breakfast.json");
        const responseFourth = await fetch("catering.json");
        if (
          !response.ok ||
          !responseSecond.ok ||
          !responseThird.ok ||
          !responseFourth.ok
        ) {
          throw new Error("No image!");
        }

        const data = await response.json();
        const dataSecond = await responseSecond.json();
        const dataThird = await responseThird.json();
        const dataFourth = await responseFourth.json();

        setFoddImages(data);
        setBurgers(dataSecond);
        setBreakfast(dataThird);
        setCatering(dataFourth);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchImages();

    setOpenIndex(null);
  }, [activeTab]);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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
            padding: "100px 0",
          }}
        >
          <div className={styles.ShapeContainer}>
            <img
              className={styles.Shape}
              src="/images/Shape-012.png"
              alt="Shape"
            />
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
                variety of cuisines – <br /> appetizers, meats seafoods, and
                more.
              </p>
            </div>

            {catering.map((cat) => (
              <Catering key={cat.id} cat={cat} />
            ))}
          </div>
        </section>
        <section className={styles.CarouselContainer}>
          <CarouselReview />
          <hr />
          <div className={styles.CounterContainer}>
            <AnimatedCounter
              end={20}
              textBold={"Years in Business "}
              textNormal={"Years of Culinary Excellence"}
            />
            <AnimatedCounter
              end={105}
              textBold={"Events Catered "}
              textNormal={"Successful Events Catered"}
            />
            <AnimatedCounter
              end={91}
              label={"K"}
              textBold={"Catering Orders Delivered  "}
              textNormal={"Catering Orders Completed"}
              breakWord
            />
            <AnimatedCounter
              end={5}
              textBold={"Branches "}
              textNormal={"Locations and Growing"}
            />
          </div>
        </section>
        <section className={styles.Accordion}>
          <div className={styles.Dashed}>
            <span>FAQ Questions</span>
          </div>
          <h3 className={styles.AccordionTitle}>We’re Here to Help</h3>

          <AccordionTabs setActiveTab={setActiveTab} />

          {faq[activeTab] && (
            <div className={styles.FadeIn} key={activeTab}>
              {faq[activeTab].map((item, index) => (
                <Accordion
                  key={index}
                  accordionHeaderText={item.question}
                  accordionContentText={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          )}
        </section>
        <Partners />
      </main>
    </>
  );
}

export default App;
