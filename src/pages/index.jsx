import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import BookCover from "../components/BookCover/BookCover.index";
import Title from "../components/Title/Title.index";
import Divider from "./../components/Divider/Divider.index";
import dbConnect from "./../utils/dbConnect";
import Book from "./../models/Book";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.custom.mainContainerMarginTop,
  },
  gutterTop: {
    marginTop: "15px",
  },
}));

export default function Home({ books }) {
  const classes = useStyles();
  const display = JSON.parse(books);

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
          {display.map((elm, index) => (
            <BookCover key={index} data={elm} />
          ))}
        </Grid>

        <Divider />
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  return {
    props: {
      books: JSON.stringify(await Book.find()),
    },
  };
}
