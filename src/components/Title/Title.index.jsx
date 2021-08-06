import React from "react";
import useWindowDimensions from "./../../utils/hooks/useWindowDimensions";
import dynamic from "next/dynamic";

function Title(props) {
  const { width } = useWindowDimensions();
  const TitlePresentation = dynamic(() => import("./Title.presentation"));

  return <TitlePresentation {...props} isMobile={width <= 500} />;
}

export default Title;
