import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import useWindowDimensions from "./../../utils/hooks/useWindowDimensions";
import Profile from "./../../components/User/Profile/Profile.index";
import dbConnect from "./../../utils/dbConnect";
import withSession from "./../../utils/withSession";
import User from "./../../models/User";

const useStyles = makeStyles((theme) => ({
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
    minHeight: (props) => (props.width <= 600 ? "50vh" : "91vh"),
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
  navItem: {
    backgroundColor: "#F6F9FD",
    border: "none",
    position: "relative",
    justifyContent: "center",
    width: "90%",
    marginLeft: "5%",
    height: "46px",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "inset 3px 0px 0px #1665D8",
    },
    transition: theme.transitions.create(),
  },
  nicon: {
    left: "20%",
    top: "50%",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    color: "#66788A",
  },
  ntext: {
    left: "45%",
    top: "20%",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    color: "#66788A",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
  },
}));

const userRoute = [
  {
    name: "profile",
    text: "Profile",
    icon: (props) => <DashboardIcon {...props} />,
    display: (props) => <Profile {...props} />,
  },
  {
    name: "changepass",
    text: "Security",
    icon: (props) => <GroupIcon {...props} />,
    display: () => "You cannot change password now!",
  },
];

export default function Index({ passToChild }) {
  const { width } = useWindowDimensions();
  const classes = useStyles({ width });
  const [currentRoute, setCurrentRoute] = useState(0);
  const user = JSON.parse(passToChild.user);

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
                    backgroundImage: `url('/images/avatars/avt (1).png')`,
                  }}
                ></div>
                <p className={classes.name}>{"@" + user.displayName}</p>
                <p className={classes.subName}>{user.username}</p>
              </div>

              <hr className={classes.hr} />

              <Grid container>
                {userRoute.map((elm, index) => (
                  <Grid item xs={12} key={index}>
                    <button
                      onClick={() => setCurrentRoute(index)}
                      className={classes.navItem}
                      style={{
                        boxShadow:
                          currentRoute === index
                            ? "inset 3px 0px 0px #1665D8"
                            : "",
                      }}
                    >
                      {elm.icon({ className: classes.nicon })}
                      <p className={classes.ntext}>{elm.text}</p>
                    </button>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
          <Grid item lg={10} md={9} sm={8} xs={12}>
            <div style={{ padding: "20px" }}>
              {userRoute[currentRoute].display(passToChild)}
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
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

    if (!user) {
      return {
        redirect: {
          destination: "/user/login",
          permanent: false,
        },
      };
    }

    if (!user.admin) {
      return {
        redirect: {
          destination: "/user/login",
          permanent: false,
        },
      };
    }
    return {
      props: {
        passToChild: {
          user: JSON.stringify(user),
        },
      },
    };
  } else
    return {
      redirect: {
        destination: "/user/login",
        permanent: false,
      },
    };
});
