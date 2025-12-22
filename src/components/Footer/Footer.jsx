import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <ul className={styles.FooterLinks}>
        <li className={styles.FooterLink}>
          <a href="/">FAQ</a>
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
    </footer>
  );
};

export default Footer;
