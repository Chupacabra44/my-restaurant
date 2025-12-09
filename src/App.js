import { RiShoppingBag4Fill } from "react-icons/ri";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <header>
        <div className={styles.Header}>
          <img src="images/Logo-02.png" alt="Logo" />
          <nav>
            <ul className={styles.Links}>
              <li className={styles.LinksItem}>
                <a href="https://www.codecademy.com/learn">Home</a>
              </li>
              <li className={styles.LinksItem}>
                <a href="https://www.codecademy.com/catalog">Menu</a>
              </li>
              <li className={styles.LinksItem}>
                <a href="https://www.codecademy.com/catalog">Catering</a>
              </li>
              <li className={styles.LinksItem}>
                <a
                  className={styles.LinksItemPage}
                  href="https://www.codecademy.com/catalog"
                >
                  Page
                </a>
                <ul className={styles.PageLinks}>
                  <li>
                    <a href="https://foodrest.1onestrong.com/about/">About</a>
                  </li>
                  <li>
                    <a href="https://foodrest.1onestrong.com/about/">
                      Location
                    </a>
                  </li>
                  <li>
                    <a href="https://foodrest.1onestrong.com/about/">FAQ</a>
                  </li>
                  <li>
                    <a href="https://foodrest.1onestrong.com/about/">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="https://foodrest.1onestrong.com/about/">Carrers</a>
                  </li>
                  <li>
                    <a href="https://foodrest.1onestrong.com/about/">404</a>
                  </li>
                </ul>
              </li>
              <li className={styles.LinksItem}>
                <a href="https://www.codecademy.com/catalog">Blog</a>
              </li>
              <li className={styles.LinksItem}>
                <a href="https://www.codecademy.com/catalog">Contact</a>
              </li>
            </ul>
          </nav>
          <a href="tel:+4733378901" className={styles.CallUs}>
            <RiShoppingBag4Fill className={styles.Icon} />
            <div>
              <div className={styles.HeaderCall}>Order Now</div>
              <span className={styles.CallPhone}>+47 333 78 901</span>
            </div>
          </a>
        </div>
      </header>
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
