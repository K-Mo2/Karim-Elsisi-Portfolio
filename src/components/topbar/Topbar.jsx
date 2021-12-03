import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            K_Mo.
          </a>
          <div className="itemContainer">
            {" "}
            <Person className="icon" />
            <span>+20 1146188602</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>karimelsisi27@gmail.com</span>
          </div>
        </div>
        <div className="right">I'm right</div>
      </div>
    </div>
  );
}
