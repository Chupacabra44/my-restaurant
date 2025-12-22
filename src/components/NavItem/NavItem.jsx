import { Link } from "react-router-dom";

const NavItem = ({ to, href, children, className, ...props }) => {
  return (
    <li className={className} {...props}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default NavItem;
