import React, { useState, useEffect } from "react";
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
import { makeStyles } from "@material-ui/core/styles";
import ROUTES from "./../utils/routes";
import { useRouter } from "next/router";
import App from "next/app";

const useStyles = makeStyles({
  toast: {
    backgroundColor: "#000000ea",
    color: "white",
  },
});

export default function MyApp({ Component, pageProps, customProps }) {
  const loggedIn = customProps?.loggedIn;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [displayLayout, setDisplayLayout] = useState(false);
  const { width } = useWindowDimensions();
  const router = useRouter();
  const MobileNavBar = dynamic(() =>
    import("../layouts/MobileNavBar/MobileNavBar.index"),
  );
  const NavBar = dynamic(() => import("../layouts/NavBar/NavBar.index"));

  const isMobile = width <= 780;
  const navWillRender = isMobile ? (
    <MobileNavBar loggedIn={loggedIn} />
  ) : (
    <NavBar loggedIn={loggedIn} />
  );
  const currentRoute = ROUTES.find((elm) => elm.pathName === router.pathname);
  const withLayout = currentRoute ? currentRoute.withLayout ?? false : false;

  // Load route configuration
  useEffect(() => {
    setDisplayLayout(withLayout);
  }, [withLayout]);

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
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastClassName={classes.toast}
        />
        <Loading loading={loading} />
        {loading ? null : displayLayout ? (
          <>
            <>{navWillRender}</>
            <Component
              {...pageProps}
              setDisplayLayout={setDisplayLayout}
              setLoading={setLoading}
              loggedIn={loggedIn}
            />
            <Footer />
          </>
        ) : (
          <Component
            {...pageProps}
            setDisplayLayout={setDisplayLayout}
            setLoading={setLoading}
            loggedIn={loggedIn}
          />
        )}
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async function (context) {
  const customProps = { loggedIn: false };

  if (!process.browser) {
    const { customApplySession } = await import("./../utils/withSession");
    const { default: dbConnect } = await import("./../utils/dbConnect");
    const { default: User } = await import("./../models/User");
    const { req, res } = context.ctx;
    await customApplySession(req, res);
    await dbConnect();

    if (req.session.get("authKey")) {
      const authKey = req.session.get("authKey");
      const id = authKey.slice(0, 24);
      const _pos = authKey.indexOf("_");
      const hashPassword = authKey.slice(24, _pos);
      const salt = authKey.slice(_pos + 1);

      const user = await User.findOne({
        $and: [{ _id: id }, { password: hashPassword }, { salt }],
      });

      customProps.loggedIn = Boolean(user);
    }
  } else {
    const appCustomPropsString =
      document.getElementById("__NEXT_DATA__")?.innerHTML;

    if (!appCustomPropsString) {
      throw new Error(`__NEXT_DATA__ script was not found`);
    }

    const appCustomProps = JSON.parse(appCustomPropsString).props;
    customProps.loggedIn = appCustomProps.customProps.loggedIn;
  }

  return {
    ...App.getInitialProps(context),
    customProps,
  };
};
