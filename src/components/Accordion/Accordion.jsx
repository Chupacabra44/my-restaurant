import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Accordion.module.scss";

const Accordion = () => {
  const [accordion, setAccordion] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const handleAccordion = () => {
    setAccordion((prev) => !prev);
    setIsDown((prev) => !prev);
  };

  return (
    <div className={styles.AccordionItem}>
      <div className={styles.AccordionButton}>
        <button
          onClick={handleAccordion}
          className={`${styles.AccordionHeader} ${
            accordion ? styles.ColorChange : ""
          }`}
        >
          What is FoodRest known for?
        </button>
        <IoIosArrowDown
          className={`${styles.AccordionIcon} ${
            isDown ? styles.IconRotate : ""
          }`}
        />
      </div>
      {accordion && (
        <div className={styles.AccordionContent}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur.
        </div>
      )}
    </div>
  );
};

export default Accordion;
