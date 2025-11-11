import { Link, Menu, Salad, X } from "lucide-react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import logo from "/logo.svg";
import { useState } from "react";

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
  const [Open, setOpen] = useState(false);

  return (
    <>
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

        <div
          className="flex md:hidden cursor-pointer"
          onClick={() => setOpen(!Open)}
        >
          {Open ? <X /> : <Menu />}
        </div>
      </div>
      
      {Open && (
        <div className="md:hidden bg-tetiary border-t border-gray-200 shadow-lg h-screen sticky">
          <ul className="py-4 flex flex-col items-center justify-center static">
            {links.map((link) => (
              <li
                className="text-gray-600 transition-colors py-3 px-3 hover:text-primary static"
                onClick={() => setOpen(false)}
              >
                {link.text}
              </li>
            ))}
            <li className="px-4 py-3">
              <PrimaryButton>Donate Now</PrimaryButton>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
