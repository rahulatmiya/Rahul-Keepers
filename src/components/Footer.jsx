import React from "react";
import ReactDom from "react-dom";

function Footer() {
  var number = new Date().getFullYear();

  return (
    <footer>
      <p>@CopyRight {number}</p>
    </footer>
  );
}
export default Footer;
