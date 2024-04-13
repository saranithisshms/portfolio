import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links , setNavbarOpen }) => {


 
  return (
    <ul className="flex flex-col i py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title}   />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;