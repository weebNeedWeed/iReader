import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import AdminUser from "../../../components/Admin/AdminUser/AdminUser.index";
import dbConnect from "./../../../utils/dbConnect";
import User from "./../../../models/User";
import Book from "./../../../models/Book";
import BookManager from "../../../components/Admin/BookManager/BookManager.index";

const adminRoutes = [
  {
    name: "Admin user",
    display: (props) => <AdminUser {...props} />,
  },
  {
    name: "Book",
    display: (props) => <BookManager {...props} />,
  },
];

const useStyles = makeStyles({
  nav: {
    float: "left",
    width: "20%",
    backgroundColor: "#363740",
    minHeight: "100vh",
    position: "fixed",
  },
  main: {
    float: "right",
    width: 100 - 20 + "%",
    backgroundColor: "white",
    maxHeight: "100%",
  },
  logogroup: {
    marginTop: "36px",
    marginLeft: "32px",
  },
  headtext: {
    fontWeight: "500",
    fontSize: "19px",
    letterSpacing: "0.4px",
    marginLeft: "12px",
    marginTop: "4px",
    color: "#A4A6B3",
    lineHeight: "24px",
  },
  navbar: {
    marginTop: "59px",
  },
  navItem: {
    backgroundColor: "transparent",
    border: "none",
    borderLeft: "4px solid rgba(0,0,0,0)",
    height: "56px",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
    color: "#DDE2FF",
    display: "inline-block",
    textAlign: "left",
    paddingLeft: "70px",
    cursor: "pointer",
    width: "100%",
  },
});

export default function Index({ passToChild }) {
  const classes = useStyles();
  const [currentRoute, setCurrentRoute] = useState(0);

  const handleClickNavItem = (index) => {
    setCurrentRoute(index);
  };

  return (
    <Container disableGutters maxWidth="xl">
      <div className={classes.nav}>
        <Grid
          container
          justifyContent="flex-start"
          className={classes.logogroup}
        >
          <Grid item>
            <Image
              src="/images/admin-logo.svg"
              alt="admin-logo"
              width={32}
              height={32}
            />
          </Grid>

          <Grid item>
            <Typography variant="h1" className={classes.headtext}>
              {"Admin dashboard"}
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.navbar}>
          <Grid container>
            {adminRoutes.map((elm, index) => (
              <Grid item sm={12} key={index}>
                <button
                  onClick={() => handleClickNavItem(index)}
                  className={classes.navItem}
                  style={
                    currentRoute === index
                      ? { borderLeft: "4px solid #DDE2FF" }
                      : null
                  }
                >
                  {elm.name}
                </button>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className={classes.main}>
        {adminRoutes[currentRoute].display(passToChild)}
      </div>
    </Container>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const listAdminUsers = JSON.stringify(await User.find({ admin: true }));
  const listBooks = JSON.stringify(await Book.find());

  return {
    props: {
      passToChild: {
        listAdminUsers,
        listBooks,
      },
    },
  };
}
