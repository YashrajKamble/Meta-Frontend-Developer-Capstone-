import React from "react";
import small_logo from "../images/Logo .svg";

const Footer = () => {
  return (
    <footer className="">
      <section>
        <div className="company-info">
          <img src={small_logo} alt="" />
          <p>
            We are a family owned Mediterraneran resturent, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>

        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservation</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>contact</h3>
          <ul>
            <li>
              Address: <br />
              123 town street, chicago
            </li>
            <li>
              Phone <br />
              +1 1234 567 890
            </li>
            <li>
              Email <br /> little@lemon.com
            </li>
          </ul>
        </div>

        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="/">Facbook</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
