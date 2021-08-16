import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./../../components/Title/Title.index";
import Grid from "@material-ui/core/Grid";
import BookCover from "../../components/BookCover/BookCover.index";
import Typography from "@material-ui/core/Typography";
import useWindowDimensions from "./../../utils/hooks/useWindowDimensions";
import dynamic from "next/dynamic";
import dbConnect from "./../../utils/dbConnect";
import Book from "./../../models/Book";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.custom.mainContainerMarginTop,
  },
  gutterTop: {
    marginTop: "20px",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));

export default function Books({ books, count }) {
  const classes = useStyles();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { width } = useWindowDimensions();
  const Pagination = dynamic(() => import("@material-ui/lab/Pagination"));
  const display = JSON.parse(books);

  return (
    <Container maxWidth="md" className={classes.container}>
      <Title>{"Books"}</Title>
      <Typography variant="subtitle1">{`Tim duoc ${count} ket qua`}</Typography>
      <Grid container spacing={2} className={classes.gutterTop}>
        {display.map((elm, index) => (
          <BookCover key={index} book data={elm} />
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(count / 10)}
        className={classes.pagination}
        size={width <= 500 ? "medium" : "large"}
        hideNextButton={width <= 500}
        hidePrevButton={width <= 500}
        page={page}
        onChange={(event, num) => {
          setPage(num);
          router.push(router.pathname + "?page=" + num);
        }}
      />
    </Container>
  );
}

export async function getServerSideProps(context) {
  await dbConnect();
  const elmPerPages = 10;
  const { page = 1 } = context.query;

  return {
    props: {
      books: JSON.stringify(
        await Book.find()
          .skip((page - 1) * elmPerPages)
          .limit(elmPerPages),
      ),
      count: await Book.countDocuments(),
    },
  };
}
