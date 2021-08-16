import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CustomEditor from "./../../../../components/CustomEditor/CustomEditor.index";
import dbConnect from "./../../../../utils/dbConnect";
import Book from "./../../../../models/Book";
import Error from "next/error";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.custom.mainContainerMarginTop,
  },
  link: {
    textDecoration: "underline",
    fontSize: "150%",
    cursor: "pointer",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  infoWrapper: {
    textAlign: "left",
  },
  info: {
    textAlign: "center",
  },
}));

export default function Books({ chapter, book, error }) {
  const classes = useStyles();
  if (error) return <Error statusCode={404} />;
  const displayChapter = JSON.parse(chapter);
  const displayBook = JSON.parse(book);

  return (
    <Container maxWidth="md" className={classes.container}>
      <Container maxWidth="md" className={classes.infoWrapper}>
        <Typography variant="h4" component="h2" className={classes.title}>
          {displayBook.title}
        </Typography>
        <Typography
          variant="h5"
          style={{ textDecoration: "underline" }}
          className={classes.info}
        >
          {displayChapter.title}
        </Typography>
        <Typography variant="h6" className={classes.info}>
          {"Created at: " +
            new Date(displayChapter.createdAt).toLocaleDateString()}
        </Typography>

        <CustomEditor readOnly data={JSON.parse(displayChapter.content)} />
      </Container>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { page, slug } = context.query;
  const { default: dbCreateModel } = import(
    "./../../../../utils/dbCreateModel"
  );
  dbCreateModel;
  await dbConnect();

  const sBook = await Book.findOne({ slug }).populate("chapters");
  if (!sBook || !sBook.chapters.find((elm) => elm.slug === page)) {
    return { props: { error: true } };
  }
  return {
    props: {
      chapter: JSON.stringify(sBook.chapters.find((elm) => elm.slug === page)),
      book: JSON.stringify(sBook),
    },
  };
}
