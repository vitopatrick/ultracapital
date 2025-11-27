import { useState, useEffect } from "react";
import { Link, useHref } from "react-router-dom";
import { links } from "../../constants/links";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const href = useHref();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "glass shadow-lg py-4"
            : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="font-serif text-2xl md:text-3xl font-bold gradient-text">
                ultra capital
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="md:flex gap-8 hidden items-center">
              {links.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`uppercase text-sm font-medium transition-all duration-300 relative group ${href === link.path
                      ? "text-primary-blue"
                      : "text-gray-300 hover:text-white"
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-300 ${href === link.path ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </Link>
              ))}
              <Link
                to="/register"
                className="bg-gradient-primary text-white px-6 py-2.5 rounded-lg uppercase text-sm font-semibold btn-modern glow-hover transition-all duration-300 hover:scale-105"
              >
                Get Started Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden inline-block">
              <button
                onClick={toggleOpen}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                aria-label="Toggle menu"
              >
                {open ? <AiOutlineClose size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20 md:h-24"></div>

      {/* Mobile Menu */}
      <SideNavbar open={open} toggleOpen={toggleOpen} />
    </>
  );
};

const SideNavbar = ({ open, toggleOpen }) => {
  const href = useHref();

  return (
    <nav
      className={`fixed top-20 left-0 right-0 z-40 md:hidden transition-all duration-300 ease-in-out ${open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
    >
      <div className="glass m-4 rounded-xl p-6 shadow-2xl">
        <div className="flex flex-col gap-6">
          {links.map((link, index) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={toggleOpen}
              className={`uppercase text-sm font-medium transition-all duration-300 animate-slideUp ${href === link.path
                  ? "text-primary-blue"
                  : "text-gray-300 hover:text-white"
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/register"
            onClick={toggleOpen}
            className="bg-gradient-primary text-white px-6 py-3 rounded-lg uppercase text-sm font-semibold text-center btn-modern glow-hover transition-all duration-300 animate-slideUp"
            style={{ animationDelay: `${links.length * 0.1}s` }}
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
