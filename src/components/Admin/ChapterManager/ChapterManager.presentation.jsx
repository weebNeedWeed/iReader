import Container from "@material-ui/core/Container";
import React from "react";
import useStyles from "../BookManager/BookManager.styles";
import CustomEditor from "./../../../components/CustomEditor/CustomEditor.index";

function ChapterManagerPresentation(props) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <CustomEditor listBooks={props.listBooks} />
    </Container>
  );
}

export default ChapterManagerPresentation;
