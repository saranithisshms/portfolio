import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, onClick }) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(); // Call the onClick callback if it's provided
    }
  };

  return (
    <Link href={href}>
      <div className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white" onClick={handleClick}>
        {title}
      </div>
    </Link>
  );
};

export default NavLink;
