import { useState } from "react";
import { RiShoppingBag4Fill } from "react-icons/ri";
import styles from "./Header.module.scss";
import style from "../NavItem/NavItem.module.scss";
import NavItem from "../NavItem/NavItem";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header>
      <div className={styles.Header}>
        <img src="images/Logo-02.png" alt="Logo" />
        <nav>
          <ul className={styles.Links}>
            <NavItem
              className={style.LinksItem}
              href="https://www.codecademy.com/learn"
            >
              Home
            </NavItem>
            <NavItem
              className={style.LinksItem}
              href="https://www.codecademy.com/learn"
            >
              Menu
            </NavItem>
            <NavItem
              className={style.LinksItem}
              href="https://www.codecademy.com/learn"
            >
              Catering
            </NavItem>

            <li
              onMouseLeave={() => setDropdown(false)}
              className={style.LinksItem}
            >
              <a
                onMouseEnter={() => setDropdown(true)}
                className={style.LinksItemPage}
                href="https://www.codecademy.com/catalog"
              >
                Page
              </a>
              {dropdown && (
                <ul
                  onMouseLeave={() => setDropdown(false)}
                  onMouseEnter={() => setDropdown(true)}
                  className={style.PageLinks}
                >
                  <NavItem
                    className={style.LinksItem}
                    href="https://www.codecademy.com/learn"
                  >
                    About
                  </NavItem>
                  <NavItem
                    className={style.LinksItem}
                    href="https://www.codecademy.com/learn"
                  >
                    Location
                  </NavItem>
                  <NavItem
                    className={style.LinksItem}
                    href="https://www.codecademy.com/learn"
                  >
                    FAQ
                  </NavItem>
                  <NavItem
                    className={style.LinksItem}
                    href="https://www.codecademy.com/learn"
                  >
                    Our Team
                  </NavItem>
                  <NavItem
                    className={style.LinksItem}
                    href="https://www.codecademy.com/learn"
                  >
                    Carrers
                  </NavItem>
                  <NavItem
                    className={style.LinksItem}
                    href="https://www.codecademy.com/learn"
                  >
                    404
                  </NavItem>
                </ul>
              )}
            </li>
            <NavItem
              className={style.LinksItem}
              href="https://www.codecademy.com/learn"
            >
              Blog
            </NavItem>
            <NavItem
              className={style.LinksItem}
              href="https://www.codecademy.com/learn"
            >
              Contact
            </NavItem>
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
