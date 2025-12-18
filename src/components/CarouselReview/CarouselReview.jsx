import Carousel from "react-multi-carousel";
import { FaStar } from "react-icons/fa";
import styles from "./CarouselReview.module.scss";
import "react-multi-carousel/lib/styles.css";

const reviews = [
  {
    id: 28,
    name: "Sarah M",
    comment:
      "FoodRest serves the most delicious meals with incredible flavors, making every dining experience truly memorable and delightful.",
    rating: 5,
  },
  {
    id: 29,
    name: "David M",
    comment:
      "FoodRest’s catering team worked closely with us to customize a menu that perfectly suited our event’s needs.",
    rating: 5,
  },
  {
    id: 30,
    name: "Lisa R",
    comment:
      "Thanks to FoodRest’s catering, our party was a hit, with food that left everyone asking for more.",
    rating: 5,
  },
  {
    id: 31,
    name: "Olivia Bennett",
    comment:
      "Dining at FoodRest is always a delightful treat; their consistent quality keeps us coming back for more.",
    rating: 5,
  },
  {
    id: 32,
    name: "Ethan Marshall",
    comment:
      "The staff at FoodRest are always attentive, and their food never fails to impress my whole family",
    rating: 5,
  },
  {
    id: 33,
    name: "William Turner",
    comment:
      "Every meal at FoodRest feels like a celebration of taste, freshness, and top-tier culinary expertise.",
    rating: 5,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  // tablet: {
  //   breakpoint: { max: 1024, min: 464 },
  //   items: 2,
  //   slidesToSlide: 2, // optional, default to 1.
  // },
  // mobile: {
  //   breakpoint: { max: 464, min: 0 },
  //   items: 1,
  //   slidesToSlide: 1, // optional, default to 1.
  // },
};

const CarouselReview = () => {
  return (
    <div className={styles.CarouselContainer}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        transitionDuration={1000}
        arrows={false}
        dotListClass={styles.CustomDots}
      >
        {reviews.map((review) => (
          <div className={styles.ContainerComment} key={review.id}>
            <p className={styles.Comment}>{review.comment}</p>
            <div className={styles.Star}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className={styles.CommentName}>{review.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselReview;
