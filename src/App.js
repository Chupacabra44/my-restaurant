import Header from "./components/Header/Header";
import styles from "./App.module.scss";

function App() {
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
      </main>
    </>
  );
}

export default App;
