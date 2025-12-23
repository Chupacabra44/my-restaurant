import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <div>
        <p className={styles.NotFoundError}>ERROR PAGE</p>
      </div>
      <div>
        <img src="/images/404-page.png" />
      </div>
      <div>
        <p className={styles.NotFoundOops}>OOPS, PAGE NOT FOUND!</p>
      </div>
      <div>
        <p className={styles.NotFoundText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, nec mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div>
        <button>Back To Home</button>
      </div>
    </div>
  );
};

export default NotFound;
