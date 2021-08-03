import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import BookCover from "../components/BookCover/BookCover.index";
import Title from "../components/Title/Title.index";
import Divider from "./../components/Divider/Divider.index";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.custom.mainContainerMarginTop,
  },
  gutterTop: {
    marginTop: "15px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{"Home page - iReader"}</title>
      </Head>
      <Container maxWidth="md" className={classes.container}>
        <Title isLink href={"/books"}>
          {"mới nhất"}
        </Title>
        <Grid container spacing={2} className={classes.gutterTop}>
          <BookCover />
        </Grid>

        <Divider />

        <Title isLink href={"/"}>
          {"tiên hiệp hot"}
        </Title>
        <Grid container spacing={2} className={classes.gutterTop}>
          <BookCover />
        </Grid>

        <Divider />

        <Title isLink href={"/"}>
          {"huyền huyễn hot"}
        </Title>
        <Grid container spacing={2} className={classes.gutterTop}>
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
        </Grid>
      </Container>
    </>
  );
}
