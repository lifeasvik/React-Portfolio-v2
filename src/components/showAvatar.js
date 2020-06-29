import React from "react";
import logo from "./images/logo.png"; // Tell webpack this JS file uses this image

function showAvatar() {
  return <img src={logo} alt="Logo" />;
}
export default showAvatar;
