import React from "react";
import "./button.css";
import { Link } from "react-router-dom";
function Button() {
  return (
    <div className="section">
      <div className="branches">
        <div className="cse">
          <Link to="/showmenu">
            <button className="button1">Boys Hostel 1 CRCL MESS</button>
          </Link>
        </div>
        <div class="mechanical">
          <Link to="/showmenu1">
            <button className="button1">Boys Hostel 2 and 3 Mayuri MESS</button>
          </Link>
        </div>
        <div class="electrical">
          <Link to="/menu">
            <button className="button1">Girls Hostel CRCL MESS</button>
          </Link>
        </div>
        <div class="electrical hoverEffect">
          <Link to="/canteen">
            <button className="button1">Hostel Canteen</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Button;
