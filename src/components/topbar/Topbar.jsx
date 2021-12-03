import React from "react";
import "./topbar.scss";
export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            K_Mo.
          </a>
        </div>
        <div className="right">I'm right</div>
      </div>
    </div>
  );
}
