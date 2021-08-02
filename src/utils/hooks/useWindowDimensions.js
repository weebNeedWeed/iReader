import { useState, useEffect } from "react";

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: process.browser ? window.innerWidth : 0,
    height: process.browser ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return windowDimensions;
}

export default useWindowDimensions;
