import React from "react";
import NavBarPresentation from "./NavBar.presentation";
import routes from "./../../utils/routes";

function NavBar() {
  return <NavBarPresentation routes={routes} />;
}

export default NavBar;
