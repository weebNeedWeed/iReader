import React from "react";
import dbConnect from "./../../../utils/dbConnect";
import Book from "./../../../models/Book";
import Error from "next/error";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.custom.mainContainerMarginTop,
    textAlign: "center",
  },
  bookInfo: {
    "&__image": {
      width: "200px",
      height: "250px",
      margin: "0 auto",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      border: "1px solid rgba(0,0,0,0.4)",
      borderRadius: "5px",
    },
    "&__bookName": {
      fontSize: "300%",
      fontWeight: "bold",
      letterSpacing: "1px",
    },
    "&__date": {
      fontSize: "100%",
    },
    "&__content": {
      fontSize: "120%",
      textAlign: "left",
    },
  },
}));

export default function Read({ book, error }) {
  const classes = useStyles();
  if (error) return <Error statusCode={404} />;
  const display = JSON.parse(book);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.bookInfo}>
        <div
          className={`${classes.bookInfo}__image`}
          style={{ backgroundImage: `url('${display.imageUrl}')` }}
        ></div>
        <Typography component="h2" className={`${classes.bookInfo}__bookName`}>
          {display.title}
        </Typography>
        <Typography component="h4" className={`${classes.bookInfo}__date`}>
          {"Created At: " + new Date(display.createdAt).toLocaleDateString()}
        </Typography>
        <Container maxWidth="md" className={`${classes.bookInfo}__content`}>
          {"Content: " + display.description}
        </Container>
        <Link
          passHref
          href={`/books/read/${display.slug}/${display.chapters[0]?.slug}`}
        >
          <Button
            variant="contained"
            className={`${classes.bookInfo}__button`}
            color="secondary"
            disabled={display.chapters.length === 0}
          >
            {"Read chapter 1"}
          </Button>
        </Link>
        <Container maxWidth="sm">
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            List chapter
          </Typography>
          <ul style={{ textAlign: "left" }}>
            {display.chapters.map((elm, index) => (
              <li key={index}>
                <Link href={`/books/read/${display.slug}/${elm.slug}`}>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "130%",
                    }}
                  >
                    {elm.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </Container>
  );
}

export async function getServerSideProps(context) {
  await dbConnect();
  const { default: dbCreateModel } = import("./../../../utils/dbCreateModel");
  dbCreateModel;
  const { slug } = context.query;
  console.log(slug);
  const searchBook = await Book.findOne({ slug }).populate("chapters");

  if (!searchBook) {
    return {
      props: {
        error: true,
      },
    };
  }

  return {
    props: {
      book: JSON.stringify(searchBook),
    },
  };
}
