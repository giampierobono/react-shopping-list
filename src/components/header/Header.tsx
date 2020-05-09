import React from "react";

import logo from "../../logo.svg";

const Header = (): React.ReactElement => (
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand">
    <img src={logo} width="30" height="30" alt="" />
    Shop-list example app
  </a>
</nav>);

export default Header