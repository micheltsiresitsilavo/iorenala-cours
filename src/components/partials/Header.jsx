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
    <Navbar disableAnimation>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle ref={btn} />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo size="w-28" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Logo size="w-32" />
        </NavbarBrand>
        <NavItem to="/">Accueil</NavItem>
        <NavItem to="about">À propos</NavItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            to="controle"
            className="text-warning bg-orange-100 rounded-lg px-2 py-2 flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="16" r="1" />
              <rect x="3" y="10" width="18" height="12" rx="2" />
              <path d="M7 10V7a5 5 0 0 1 10 0v3" />
            </svg>
            Admin
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
