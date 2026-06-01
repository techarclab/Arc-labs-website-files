import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const NAV_LINKS = [
  { path: "/",             label: "Home" },
  { path: "/industrial-iot-solutions", label: "IIoT Solutions" },
  { path: "/programs",     label: "Programs" },
  { path: "/products",     label: "Products" },
  { path: "/lab-packages", label: "Lab Packages" },
  { path: "/csr-partners", label: "CSR" },
  { path: "/verify",       label: "Verify" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <Link to="/" className="navbar-logo">
          <span className="logo-dot" />
          ARC LABS
        </Link>

        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/lab-packages" className="nav-cta">
              Get Started
            </Link>
          </li>
        </ul>

        <button
          className="navbar-burger"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      <div className={`navbar-mobile${mobileOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
        <Link to="/lab-packages" className="nav-cta" style={{ textAlign: "center", marginTop: 4 }}>
          Get Started
        </Link>
      </div>
    </>
  );
}
