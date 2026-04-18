import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "../../styles/Navbar.css";

const navLinks = [
  { label: "About", hasDropdown: true },
  { label: "Companies", hasDropdown: true },
  { label: "Library", hasDropdown: false },
];

const navLinksRight = [
  { label: "Partners", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "Startup Jobs", hasDropdown: false },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (label) => setOpenDropdown(label);
  const handleMouseLeave = () => setOpenDropdown(null);

  const renderLink = ({ label, hasDropdown }) => (
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
          <a href="#" className="dropdown-item">Option 1</a>
          <a href="#" className="dropdown-item">Option 2</a>
          <a href="#" className="dropdown-item">Option 3</a>
        </div>
      )}
    </div>
  );

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Left links */}
        <div className="nav-group nav-left">
          {navLinks.map(renderLink)}
        </div>

        {/* Center Y Logo */}
        <a href="/" className="navbar-logo" aria-label="Y Combinator Home">
          <img src={logo} alt="Y Combinator" className="y-logo-img" />
        </a>

        {/* Right links */}
        <div className="nav-group nav-right">
          {navLinksRight.map(renderLink)}

          {/* Avatar */}
          <div className="nav-avatar" title="Account">
            <span>A</span>
          </div>

          {/* Apply button */}
          <a href="#" className="btn-apply">Apply</a>
        </div>
      </div>
    </nav>
  );
}