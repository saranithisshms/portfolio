import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick callback if it's provided
    }
  };
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      <div onClick={handleClick}>{title}</div>
    </Link>
  );
};

export default NavLink;
