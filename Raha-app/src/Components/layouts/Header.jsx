import { Menu } from "lucide-react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import logo from "/logo.svg";

export const links = [
  {
    link: "",
    text: "Home",
  },
  {
    link: "",
    text: "About",
  },
  {
    link: "",
    text: "Donate",
  },
  {
    link: "",
    text: "Fundraise",
  },
  {
    link: "",
    text: "Contact",
  },
];

export const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-screen-2 mx-3 md:mx-9 py-4">
      <div className="h-12">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="md:flex hidden gap-10">
          {links.map((link) => (
            <li className="text-gray-600 cursor-pointer hover:text-primary transition-colors">
              {link.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex hidden md:flex-row">
        <PrimaryButton>Donate Now</PrimaryButton>
      </div>
      <div className="flex md:hidden">
        <Menu />
      </div>
    </div>
  );
};
