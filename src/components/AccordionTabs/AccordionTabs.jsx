import styles from "./AccordionTabs.module.scss";

const AccordionTabs = ({ setActiveTab }) => {
  return (
    <div className={styles.AccordionTabs}>
      <button
        onClick={() => setActiveTab("General Questions")}
        className={styles.AccordionTab}
      >
        General Questions
      </button>
      <button
        onClick={() => setActiveTab("Menu")}
        className={styles.AccordionTab}
      >
        Menu
      </button>
      <button className={styles.AccordionTab}>Catering</button>
    </div>
  );
};

export default AccordionTabs;
