import styles from "./App.module.scss";

function App() {
  return (
    <header>
      <div className={styles.Header}>
        <img src="images/Logo-02.png" alt="Logo" />
        <nav>
          <ul className={styles.Links}>
            <li>
              <a href="https://www.codecademy.com/learn">Home</a>
            </li>
            <li>
              <a href="https://www.codecademy.com/catalog">Menu</a>
            </li>
            <li>
              <a href="https://www.codecademy.com/catalog">Catering</a>
            </li>
            <li>
              <a href="https://www.codecademy.com/catalog">Page</a>
            </li>
            <li>
              <a href="https://www.codecademy.com/catalog">Blog</a>
            </li>
            <li>
              <a href="https://www.codecademy.com/catalog">Contact</a>
            </li>
          </ul>
        </nav>
        <div>Call us</div>
      </div>
    </header>
  );
}

export default App;
