import { IoIosArrowDropupCircle } from "react-icons/io";
import styles from "./Footer.module.scss";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsOnTop(scrollTop <= 100);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={styles.Footer}>
      <ul className={styles.FooterLinks}>
        <li className={styles.FooterLink}>
          <a onClick={scrollToTop} href="#">
            FAQ
          </a>
        </li>
        <li className={styles.FooterLink}>
          <a href="/">Careers</a>
        </li>
        <li className={styles.FooterLink}>
          <a href="/">Blog</a>
        </li>
        <li className={styles.FooterLink}>
          <a href="/">Community</a>
        </li>
      </ul>
      <div>
        <p>Copyright © 2025 Foodrest | Powered by SD</p>
      </div>
      <span className={styles.ArrowUp}>
        {!isOnTop && <IoIosArrowDropupCircle onClick={scrollToTop} />}
      </span>
    </footer>
  );
};

export default Footer;
