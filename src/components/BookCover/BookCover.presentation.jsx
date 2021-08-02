import React from "react";
import useStyles from "./BookCover.styles";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function BookCoverPresentation() {
  const classes = useStyles();

  return (
    <Grid item lg={2} md={2} sm={3} xs={6}>
      <Link href="/" passHref>
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant="caption" className={classes.bookName}>
            {"tuong thanh qua phu khi con tre"}
          </Typography>
        </Paper>
      </Link>
    </Grid>
  );
}

export default BookCoverPresentation;
