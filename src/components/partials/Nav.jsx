import { NavLink } from "react-router-dom";
const NavItem = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-warning font-medium"
          : "hover:text-gray-500 text-gray-700 dark:text-slate-100"
      }
    >
      {children}
    </NavLink>
  );
};
export default NavItem;
