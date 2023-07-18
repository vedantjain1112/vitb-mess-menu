import React, { useEffect } from "react";
import "./header.css";

function Header() {
  useEffect(() => {
    const menuIcon = document.getElementById("menu-icon");
    const navBar = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".links a");

    const handleMenuClick = () => {
      navBar.classList.toggle("active");
    };

    const handleLinkClick = () => {
      navBar.classList.remove("active");
    };

    menuIcon.addEventListener("click", handleMenuClick);

    navLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Clean up event listeners on component unmount
    return () => {
      menuIcon.removeEventListener("click", handleMenuClick);

      navLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <h2>
          Mess<span>Menu</span>
        </h2>
      </div>
      <nav>
        <ul className="links">
          <li>
            <a href="index.html" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="hostel_1.html" target="_blank">
              Boy's Hostel 1
            </a>
          </li>
          <li>
            <a href="hostel_2&3.html" target="_blank">
              Boy's Hostel 2&3
            </a>
          </li>
          <li>
            <a href="girls_hostel.html" target="_blank">
              Girl's Hostel
            </a>
          </li>
          <li>
            <a href="hostel__canteen.html" target="_blank">
              Hostel Canteen
            </a>
          </li>
        </ul>
      </nav>
      <i className="fa fa-bars" id="menu-icon"></i>
    </div>
  );
}

export default Header;
