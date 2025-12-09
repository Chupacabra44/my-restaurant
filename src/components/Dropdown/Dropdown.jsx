import { useState } from "react";

const Dropdown = ({ label, children, className, pageClass, menuClass }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li
      className={className}
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      <a className={pageClass}>{label}</a>
      {dropdown && <ul className={menuClass}>{children}</ul>}
    </li>
  );
};

export default Dropdown;
