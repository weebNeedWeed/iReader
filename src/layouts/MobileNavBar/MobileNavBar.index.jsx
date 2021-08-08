import React, { useState } from "react";
import MobileNavBarPresentation from "./MobileNavBar.presentation";
import ROUTES from "./../../utils/routes";
import { useRouter } from "next/router";

function MobileNavBar({ loggedIn }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((prevState) => !prevState);

  return (
    <MobileNavBarPresentation
      isOpen={isOpen}
      routes={ROUTES}
      handleClick={handleClick}
      loggedIn={loggedIn}
      currentPathname={router.pathname}
    />
  );
}

export default MobileNavBar;
