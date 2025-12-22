import { useState } from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { HiMapPin } from "react-icons/hi2";
import { GoArrowRight } from "react-icons/go";
import styles from "./Form.module.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form data submitted:", formData);

    setSubmittedData(formData);

    setFormData({
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      email: "",
      telephone: "",
      message: "",
    });
  };

  return (
    <section className={styles.FormSection}>
      <div className={styles.SectionLeft}>
        <h3>Fresh Ingredients, Flawless Events</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit integer sed,
          ornare nascetur metus pharetra odio hac nibh vel pellentesque.
        </p>
        <div className={styles.Contact}>
          <div className={styles.ContactLeft}>
            <FaSquarePhone className={styles.Icon} />
            <div className={styles.ContactCenter}>
              <span className={styles.IconContact}>Contact Center</span>
              <span className={styles.CallPhone}>+47 333 78 901</span>
            </div>
          </div>
          <div className={styles.ContactRight}>
            <HiMapPin className={styles.Icon} />
            <div className={styles.ContactCenter}>
              <span className={styles.IconContact}>We are available</span>
              <span className={styles.CallPhone}>Sat 8:30 – Mon 8:30</span>
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3417.2154807367306!2d13.833550976800732!3d44.8614723710705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd31a79356d4b%3A0x7fcaad69fbec69fc!2sKochova%20ul.%204%2C%2052100%2C%20Pula!5e1!3m2!1shr!2shr!4v1766393155762!5m2!1shr!2shr"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form onSubmit={handleSubmit} className={styles.SectionRight}>
        <div className={styles.Input}>
          <input
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name *"
            type="text"
            name="firstName"
          />
          <input
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name *"
            type="text"
            name="lastName"
          />
        </div>
        <div className={styles.Input}>
          <input
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder="Street Address"
            type="text"
            name="streetAddress"
          />
          <input
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            type="text"
            name="city"
          />
        </div>
        <div className={styles.Input}>
          <input
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="text"
            name="email"
          />
          <input
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Telephone"
            type="text"
            name="telephone"
          />
        </div>
        <div className={styles.Textarea}>
          <textarea
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Question or Comment "
            name="message"
          ></textarea>
        </div>
        <div>
          <button className={styles.Button}>
            Send Message <GoArrowRight />
          </button>
        </div>
        {submittedData && (
          <div>
            <h3>Submitted Form Data:</h3>
            <div>
              <p>
                <strong>First Name:</strong> {submittedData.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {submittedData.lastName}
              </p>
              <p>
                <strong>Street Address:</strong> {submittedData.streetAddress}
              </p>
              <p>
                <strong>City:</strong> {submittedData.city}
              </p>
              <p>
                <strong>Email:</strong> {submittedData.email}
              </p>
              <p>
                <strong>Telephone:</strong> {submittedData.telephone}
              </p>
              <p>
                <strong>Message:</strong> {submittedData.message}
              </p>
            </div>
          </div>
        )}
      </form>
    </section>
  );
};

export default Form;
