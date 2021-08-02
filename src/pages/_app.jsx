import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { customTheme } from "./../layouts/theme";
import "normalize.css";
import NextNprogress from "nextjs-progressbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import useWindowDimensions from "../utils/hooks/useWindowDimensions";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }) {
  const { width } = useWindowDimensions();
  const isMobile = width <= 780;
  const MobileNavBar = dynamic(() =>
    import("../layouts/MobileNavBar/MobileNavBar.index"),
  );
  const NavBar = dynamic(() => import("../layouts/NavBar/NavBar.index"));
  const navWillRender = isMobile ? <MobileNavBar /> : <NavBar />;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={customTheme}>
        <NextNprogress
          color="#000"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <>
          <>{navWillRender}</>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
