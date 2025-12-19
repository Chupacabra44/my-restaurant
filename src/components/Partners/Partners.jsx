import styles from "./Partners.module.scss";

const Partners = () => {
  const partners = [
    {
      img: "/images/logo-preview-1.png",
      alt: "Partner 1",
    },
    {
      img: "/images/logo-preview-2.png",
      alt: "Partner 2",
    },
    {
      img: "/images/logo-preview-3.png",
      alt: "Partner 3",
    },
    {
      img: "/images/logo-preview-4.png",
      alt: "Partner 4",
    },
    {
      img: "/images/logo-preview-6.png",
      alt: "Partner 5",
    },
    {
      img: "/images/logo-preview-8.png",
      alt: "Partner 6",
    },
  ];

  return (
    <section className={styles.PartnerSection}>
      <h3 className={styles.PartnerTitle}>
        Collaborated with over 800+ trusted worldwide partners
      </h3>
      <div className={styles.PartnerBoxes}>
        {partners.map((partner) => (
          <div>
            <img
              className={styles.PartnerBox}
              src={partner.img}
              alt={partner.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
