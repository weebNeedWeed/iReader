import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import dbConnect from "./../../utils/dbConnect";
import Book from "./../../models/Book";
import Grid from "@material-ui/core/Grid";
import BookCover from "../../components/BookCover/BookCover.index";
import Title from "../../components/Title/Title.index";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.custom.mainContainerMarginTop,
    minHeight: "100vh",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    margin: "0 auto",
    border: "1px solid rgba(0,0,0,0.5)",
    marginTop: "15px",
  },
  input: {
    width: "100%",
    padding: "5px",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
  },
  wrapper: {
    borderBottom: "1px solid black",
    paddingRight: "5px",
    borderRadius: "2px",
  },
  formLabel: {
    marginBottom: "10px",
    fontWeight: "900",
    textDecoration: "underline",
  },
}));

export default function Search({ books }) {
  const classes = useStyles();
  const display = books ? JSON.parse(books) : [];

  return (
    <Container maxWidth="md" className={classes.container}>
      <form style={{ textAlign: "center" }}>
        <Paper component="div" className={classes.form}>
          <InputBase
            className={classes.input}
            placeholder={"Tìm Truyện"}
            inputProps={{ "aria-label": "Tim kiem truyen" }}
            name="keyword"
          />

          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button
          type="submit"
          variant="contained"
          size="large"
          className={classes.button}
        >
          {"tìm "} <SearchIcon />
        </Button>
      </form>
      {books ? <Title>{"Results"}</Title> : null}
      <Grid container spacing={2}>
        {display.map((elm, index) => (
          <BookCover key={index} book data={elm} />
        ))}
      </Grid>
    </Container>
  );
}

export async function getServerSideProps(context) {
  await dbConnect();
  const { keyword } = context.query;

  if (!keyword || keyword === "") {
    return {
      props: {
        error: true,
      },
    };
  }
  return {
    props: {
      books: JSON.stringify(await Book.find({ tag: { $regex: keyword } })),
    },
  };
}
