import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./../../components/Title/Title.index";
import Grid from "@material-ui/core/Grid";
import BookCover from "../../components/BookCover/BookCover.index";
import Typography from "@material-ui/core/Typography";
import useWindowDimensions from "./../../utils/hooks/useWindowDimensions";
import dynamic from "next/dynamic";

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

export default function Books() {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const Pagination = dynamic(() => import("@material-ui/lab/Pagination"));

  return (
    <Container maxWidth="md" className={classes.container}>
      <Title>{"Books"}</Title>
      <Typography variant="subtitle1">{"Tim duoc 1344 ket qua"}</Typography>
      <Grid container spacing={2} className={classes.gutterTop}>
        <BookCover />
      </Grid>

      <Pagination
        count={10}
        className={classes.pagination}
        size={width <= 500 ? "medium" : "large"}
        hideNextButton={width <= 500}
        hidePrevButton={width <= 500}
      />
    </Container>
  );
}
