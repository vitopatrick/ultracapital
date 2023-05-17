import { useState } from "react";
import { Link, useHref } from "react-router-dom";
import { links } from "../../constants/links";
import { FaBars } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";

const Navbar = () => {
  const href = useHref();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="py-10 px-4 relative bg-bgColor">
        <div className="flex items-center justify-between">
          <div className="font-serif text-3xl">ultra capital</div>
          <div className="md:flex gap-8 hidden items-center">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={
                  href === link.path
                    ? "uppercase text-main_light underline"
                    : "uppercase hover:text-main_light text-main underline ease-in-out"
                }
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/register"
              className="bg-[#1589FF] text-white p-2 uppercase"
            >
              Get Started Now
            </Link>
          </div>
          <div className="md:hidden inline-block">
            {open ? (
              <AiOutlineArrowUp
                onClick={() => toggleOpen()}
                className="cursor-pointer"
              />
            ) : (
              <FaBars onClick={() => toggleOpen()} className="cursor-pointer" />
            )}
          </div>
        </div>
      </nav>
      <SideNavbar open={open} />
    </>
  );
};

const SideNavbar = ({ open }) => {
  const href = useHref();
  return (
    <nav
      className={
        open
          ? "absolute bg-bgColor z-30 w-full p-3 md:hidden translate-y-[0px] ease-in-out"
          : "absolute bg-bgColor z-30 w-full p-3 translate-y-[-999px] ease-in-out md:hidden"
      }
    >
      <div className="flex flex-col gap-8">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className={
              href === link.path
                ? "uppercase text-main_light underline"
                : "uppercase hover:text-main_light text-main underline ease-in-out"
            }
          >
            {link.name}
          </Link>
        ))}
        <Link to="/register" className="bg-[#1589FF] text-white p-2 uppercase">
          Get Started Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
