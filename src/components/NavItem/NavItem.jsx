// import styles from "./NavItem.module.scss";

const NavItem = ({ href, children, className, ...props }) => {
  return (
    <li className={className} {...props}>
      <a href={href}>{children}</a>
    </li>
  );
};

export default NavItem;
