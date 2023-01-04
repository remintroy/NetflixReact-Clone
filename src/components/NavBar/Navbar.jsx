import React from "react";
import "./NavBar.css";

function Navbar() {
  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar").style.backgroundColor =
        "rgba(0, 0, 0, 0.617)";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  }

  return (
    <div className="NavBar" id="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Logo"
      />
      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avathar"
      />
    </div>
  );
}

export default Navbar;
