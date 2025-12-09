import { RiShoppingBag4Fill } from "react-icons/ri";
import styles from "./Header.module.scss";
import style from "../NavItem/NavItem.module.scss";
import NavItem from "../NavItem/NavItem";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
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

            <Dropdown
              label="Page"
              className={style.LinksItem}
              pageClass={style.LinksItemPage}
              menuClass={style.PageLinks}
            >
              <NavItem
                className={style.LinksItem}
                href="https://foodrest.1onestrong.com/about/"
              >
                About
              </NavItem>
              <NavItem
                className={style.LinksItem}
                href="https://foodrest.1onestrong.com/about/"
              >
                Location
              </NavItem>
              <NavItem
                className={style.LinksItem}
                href="https://foodrest.1onestrong.com/about/"
              >
                FAQ
              </NavItem>
              <NavItem
                className={style.LinksItem}
                href="https://foodrest.1onestrong.com/about/"
              >
                Our Team
              </NavItem>
              <NavItem
                className={style.LinksItem}
                href="https://foodrest.1onestrong.com/about/"
              >
                Carrers
              </NavItem>
              <NavItem
                className={style.LinksItem}
                href="https://foodrest.1onestrong.com/about/"
              >
                404
              </NavItem>
            </Dropdown>
            <Dropdown
              className={style.LinksItem}
              menuClass={style.PageLinks}
              label="Blog"
            >
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
                Single Post
              </NavItem>
            </Dropdown>
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
