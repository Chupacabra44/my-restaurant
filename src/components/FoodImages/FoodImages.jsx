import styles from "./FoodImages.module.scss";

const FoodImages = ({ foodImages }) => {
  return (
    <div className={styles.imageGrid}>
      {foodImages.map((image, index) => (
        <img
          key={image.id}
          className={`${styles.imageItem} ${styles.slideUp}`}
          style={{ animationDelay: `${index * 0.3}s` }}
          src={image.image}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default FoodImages;
