import React from "react";
import useStyles from "./Footer.styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

function FooterPresentation() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography variant="button" component="h3">
        {"Tags: "}
        {[
          1, 2, 3, 4, 6, 43, 43, 4, 4, 6, 6, 35, 345, 345, 345, 54, 345, 34, 44,
          4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        ].map((elm, index) => (
          <div key={index} className={classes.wrapper}>
            <Link passHref href="/">
              <a className={classes.tag}>Meoe sd</a>
            </Link>
            {" , "}
          </div>
        ))}
      </Typography>

      <hr className={classes.hr} />

      <Typography variant="h6" component="h2" className={classes.copyright}>
        {"Copyright © iReader 2021"}
      </Typography>
    </Container>
  );
}

export default FooterPresentation;
