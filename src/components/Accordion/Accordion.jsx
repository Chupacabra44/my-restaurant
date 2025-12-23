import { IoIosArrowDown } from "react-icons/io";
import styles from "./Accordion.module.scss";

const Accordion = ({
  accordionHeaderText,
  accordionContentText,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={styles.AccordionItem}>
      <div className={styles.AccordionButton}>
        <button
          onClick={onToggle}
          className={`${styles.AccordionHeader} ${
            isOpen ? styles.ColorChange : ""
          }`}
        >
          {accordionHeaderText}
        </button>
        <IoIosArrowDown
          className={`${styles.AccordionIcon} ${
            isOpen ? styles.IconRotate : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className={styles.AccordionContent}>
          <p style={{ padding: "0 14px 0 14px" }}>{accordionContentText}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
