import NavItem from "./Nav";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Logo from "../Logo";

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function Header() {
  const menuItems = [
    { menu: "Accueil", link: "/" },
    { menu: "À propos", link: "about" },
    { menu: "Les Associations", link: "associations" },
    { menu: "Bénévole", link: "benevole" },
    { menu: "Event", link: "event" },
  ];

  const btn = useRef();

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle ref={btn} />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo size="w-20" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Logo size="w-20" />
        </NavbarBrand>
        <NavItem to="/">Accueil</NavItem>
        <NavItem to="about">À propos de nous </NavItem>
        <NavItem to="associations">Les Associations </NavItem>
        <NavItem to="benevole">Bénévole</NavItem>
        <NavItem to="event">Event</NavItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            to="don"
            className="text-warning bg-orange-100 rounded-lg px-2 py-2"
          >
            Faire un Don
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-lg"
              to={item.link}
              onClick={() => btn?.current.click()}
            >
              {item.menu}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
