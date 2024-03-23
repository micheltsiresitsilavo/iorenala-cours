import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
const Logo = ({ size }) => {
  return (
    <Link to="/">
      <img src={logo} className={size} />
    </Link>
  );
};

export default Logo;
