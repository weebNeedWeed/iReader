import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles({
  headNav: {
    height: "64px",
    width: "100%",
    backgroundColor: "#3F51B5",
  },
  logo: {
    display: "inline-block",
  },
  logoText: {
    display: "inline-block",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "24px",
    color: "white",
    marginLeft: "8px",
  },
  logoWrapper: {
    marginLeft: "24px",
    display: "flex",
  },
  buttonWrapper: {
    color: "white",
    marginTop: "22px",
    marginRight: "32px",
  },
  navButton: {
    cursor: "pointer",
  },
  leftNav: {
    minHeight: "100vh",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    border: "2px solid rgba(63, 63, 68, 0.1)",
  },
  avatar: {
    backgroundColor: "white",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    margin: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "95%",
  },
  avatarWrapper: {
    textAlign: "center",
    marginTop: "24px",
  },
  name: {
    padding: 0,
    margin: 0,
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "500",
    color: "#3A3B3F",
    letterSpacing: "0.5px",
    marginTop: "16px",
  },
  subName: {
    padding: 0,
    margin: 0,
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#9EA0A5",
    letterSpacing: "0.3px",
    marginTop: "4px",
  },
  hr: {
    width: "88%",
    border: "1px solid #E4E7EB",
    marginTop: "23px",
  },
});

export default function Index() {
  const classes = useStyles();
  const [moveStage, setMoveStage] = useState(1);

  useEffect(() => {
    const runFc = () => setMoveStage(moveStage < 6 ? moveStage + 1 : 1);
    setTimeout(runFc, 100);

    return clearTimeout(runFc);
  });

  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <Grid
          container
          justifyContent="space-between"
          className={classes.headNav}
        >
          <Grid item>
            <div className={classes.logoWrapper}>
              <Image
                src="/images/user-logo.svg"
                width={36}
                height={36}
                alt="user-logo"
                className={classes.logo}
              />
              <p variant="h6" className={classes.logoText}>
                {"User dashboard"}
              </p>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.buttonWrapper}>
              <Link href="/" passHref>
                <HomeIcon
                  className={classes.navButton}
                  style={{ marginRight: "21px" }}
                />
              </Link>
              <Link href="/user/logout" passHref>
                <ExitToAppIcon className={classes.navButton} />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" disableGutters>
        <Grid container alignContent="center" justifyContent="center">
          <Grid item lg={2} md={3} sm={4} xs={12}>
            <div className={classes.leftNav}>
              <div className={classes.avatarWrapper}>
                <div
                  className={classes.avatar}
                  style={{
                    backgroundImage: `url('/images/avatars/avt (${moveStage}).png')`,
                  }}
                ></div>
                <p className={classes.name}>{"@" + "Testaldaw"}</p>
                <p className={classes.subName}>{"Testasadasldaw"}</p>
              </div>

              <hr className={classes.hr} />
            </div>
          </Grid>
          <Grid item lg={10} md={9} sm={8} xs={12}></Grid>
        </Grid>
      </Container>
    </>
  );
}
