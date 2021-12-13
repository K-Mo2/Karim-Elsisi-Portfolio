import { useContext } from "react";
import "./toggle.scss";
import ThemeContext from "../../context";

export default function Toggle() {
  const themeCtx = useContext(ThemeContext);
  const darkMode = themeCtx.state.darkMode;

  const toggleHandler = function () {
    themeCtx.dispatch({ type: "TOGGLE" });
  };
  return (
    <div
      className="toggle"
      style={{ backgroundColor: darkMode ? "white" : "#15023a" }}
    >
      <img src="assets/moon.png" alt="moon" className="toggle-icon" />
      <img src="assets/sun.png" alt="sun" className="toggle-icon" />
      <div
        className="toggle-button"
        onClick={() => {
          toggleHandler();
        }}
        style={{ right: darkMode ? "7.5vw" : "10vw" }}
      ></div>
    </div>
  );
}
