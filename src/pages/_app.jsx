import React, { useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { customTheme } from "./../layouts/theme";
import NextNprogress from "nextjs-progressbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import useWindowDimensions from "../utils/hooks/useWindowDimensions";
import dynamic from "next/dynamic";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "../layouts/Footer/Footer.index";
import Loading from "../layouts/Loading/Loading.index";

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const MobileNavBar = dynamic(() =>
    import("../layouts/MobileNavBar/MobileNavBar.index"),
  );
  const NavBar = dynamic(() => import("../layouts/NavBar/NavBar.index"));
  const { width } = useWindowDimensions();
  const isMobile = width <= 780;
  const navWillRender = isMobile ? <MobileNavBar /> : <NavBar />;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
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
        <Loading loading={loading} />
        {loading ? null : (
          <>
            <>{navWillRender}</>
            <Component {...pageProps} setLoading={setLoading} />
            <Footer />
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
