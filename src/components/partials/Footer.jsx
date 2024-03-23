import Logo from "../Logo";
import ToggleTheme from "../ToggleTheme";
const Footer = () => {
  return (
    <div className="mt-16 border-t border-gray-100 pt-8">
      <p className="text-center text-xs/relaxed text-gray-500">
        © Company 2022. All rights reserved.
        <br />
        Created with
        <a
          href="#"
          className="text-gray-700 underline transition hover:text-gray-700/75"
        >
          {" "}
          love by Michel Tsilavo
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
