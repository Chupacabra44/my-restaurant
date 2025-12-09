import { RiShoppingBag4Fill } from "react-icons/ri";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
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

            <li
              onMouseLeave={() => setDropdown(false)}
              className={styles.LinksItem}
            >
              <a
                onMouseEnter={() => setDropdown(true)}
                className={styles.LinksItemPage}
                href="https://www.codecademy.com/catalog"
              >
                Page
              </a>
              {dropdown && (
                <ul
                  onMouseLeave={() => setDropdown(false)}
                  onMouseEnter={() => setDropdown(true)}
                  className={styles.PageLinks}
                >
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
              )}
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
  );
};

export default Header;
