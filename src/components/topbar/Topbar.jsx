import "./topbar.scss";
import { Call, Mail } from "@material-ui/icons";
import Toggle from "../toggle/Toggle";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen ? "active" : "")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            K_Mo.
          </a>
          <div className="itemContainer">
            {" "}
            <Call className="icon" />
            <span>+20 1146188602</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>karimelsisi27@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <Toggle />

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
