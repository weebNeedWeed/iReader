import React, { useState } from "react";
import MobileNavBarPresentation from "./MobileNavBar.presentation";
import routes from "./../../utils/routes";

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((prevState) => !prevState);

  return (
    <MobileNavBarPresentation
      isOpen={isOpen}
      routes={routes}
      handleClick={handleClick}
    />
  );
}

export default MobileNavBar;
