import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "../../styles/Navbar.css";

const navLinks = [
  {
    label: "About",
    hasDropdown: true,
    items: [
      { label: "What Happens at YC?", href: "#" },
      { label: "Apply", href: "#" },
      { label: "YC Interview Guide", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "People", href: "#" },
      { label: "YC Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    label: "Companies",
    hasDropdown: true,
    items: [
      { label: "Startup Directory", href: "#" },
      { label: "Founder Directory", href: "#" },
      { label: "Launch YC", href: "#" },
    ],
  },
  { label: "Library", hasDropdown: false, items: [] },
];

const navLinksRight = [
  { label: "Partners", hasDropdown: false, items: [] },
  {
    label: "Resources",
    hasDropdown: true,
    items: [
      { label: "Startup School", href: "#" },
      { label: "Newsletter", href: "#" },
      { label: "Requests for Startups", href: "#" },
      { label: "For Investors", href: "#" },
      { label: "Verify Founders", href: "#" },
      { label: "Hacker News", href: "#" },
      { label: "Bookface", href: "#" },
      { label: "Safe", href: "#" },
      { label: "Find a Co-Founder", href: "#" },
    ],
  },
  { label: "Startup Jobs", hasDropdown: false, items: [] },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (label) => setOpenDropdown(label);
  const handleMouseLeave = () => setOpenDropdown(null);

  const renderLink = ({ label, hasDropdown, items }) => (
    <div
      key={label}
      className={`nav-item ${hasDropdown ? "has-dropdown" : ""}`}
      onMouseEnter={() => hasDropdown && handleMouseEnter(label)}
      onMouseLeave={() => hasDropdown && handleMouseLeave()}
    >
      <a href="#" className="nav-link">
        {label}
        {hasDropdown && (
          <svg
            className="chevron"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </a>
      {hasDropdown && openDropdown === label && (
        <div className="dropdown-menu">
          {items.map((item) => (
            <a key={item.label} href={item.href} className="dropdown-item">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-group nav-left">
          {navLinks.map(renderLink)}
        </div>

        <a href="/" className="navbar-logo" aria-label="Y Combinator Home">
          <img src={logo} alt="Y Combinator" className="y-logo-img" />
        </a>

        <div className="nav-group nav-right">
          {navLinksRight.map(renderLink)}

          <a href="#" className="btn-login">Log in</a>
          <a href="#" className="btn-apply">Apply</a>
        </div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}