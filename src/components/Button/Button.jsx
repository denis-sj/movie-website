import React from "react";
import "./styles.css";

function Button({ name, icon, color = "#ffffff", bgcolor = "#ff3700" }) {
  return (
    <a
      href="#"
      className="mainBtn"
      style={{ color: color, background: bgcolor }}
    >
      {icon} {name}
    </a>
  );
}

export default Button;
