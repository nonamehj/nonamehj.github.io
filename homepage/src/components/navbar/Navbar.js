import "./NavbarStyle.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const LinksClose = (e) => {
    if (e.target) {
      setShowLinks(false);
    }
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h1 className="logo">portfolio</h1>
          </Link>
          <div onClick={() => setShowLinks(!showLinks)}>
            {showLinks ? (
              <button className="nav-toggle">
                <FaTimes />
              </button>
            ) : (
              <button className="nav-toggle">
                <FaBars />
              </button>
            )}
          </div>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef} onClick={(e) => LinksClose(e)}>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
