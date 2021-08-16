import React from "react";
import useStyles from "./BookCover.styles";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function BookCoverPresentation({ data }) {
  const classes = useStyles({ image: data.imageUrl });

  return (
    <Grid item lg={2} md={2} sm={3} xs={6}>
      <Link href={`/books/info/${data.slug}`} passHref>
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant="caption" className={classes.bookName}>
            {data.title}
          </Typography>
        </Paper>
      </Link>
    </Grid>
  );
}

export default BookCoverPresentation;
