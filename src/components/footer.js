import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="foot">
      <div className="footer-bottom">
        <h2>Follow me</h2>
        <div class="social-links">
          <a
            href="https://www.facebook.com/jainvedant1121?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com/jainvedant1005?igshid=ZDdkNTZiNTM="
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/jainvedant1211?t=ukrLoFER_OBmseKpUHi5pg&s=08"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vedant-jain-1191ab216"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/vedantjain1112"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <p id="cpy">
          Copy right <sup id="super">&copy;</sup> 2023
        </p>
        <p id="maintain">
          Developed and maintained by{" "}
          <a href="https://jainvedant1121.netlify.app/">&#64; Vedant</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
