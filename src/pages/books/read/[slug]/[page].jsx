import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CustomEditor from "./../../../../components/CustomEditor/CustomEditor.index";

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

export default function Books() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="button" className={classes.link}>
            {"Previous page"}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="button" className={classes.link}>
            {"Next page"}
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="md" className={classes.infoWrapper}>
        <Typography variant="h4" component="h2" className={classes.title}>
          {"test.book.title"}
        </Typography>
        <Typography
          variant="h5"
          style={{ textDecoration: "underline" }}
          className={classes.info}
        >
          {"test.title"}
        </Typography>
        <Typography variant="h6" className={classes.info}>
          {"Created at: "}
        </Typography>
        <Typography variant="h6" className={classes.info} gutterBottom>
          {"Posted by: " + "test.user.displayName"}
        </Typography>
        <CustomEditor
          readOnly
          data={{
            blocks: [
              {
                key: "ce3ng",
                text: "",
                type: "unstyled",
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
            ],
            entityMap: {},
          }}
        />
      </Container>
    </Container>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
