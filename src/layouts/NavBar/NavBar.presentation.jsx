import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import React from "react";
import useStyles from "./NavBar.styles";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function NavBarPresentation(props) {
  const { routes } = props;
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container maxWidth="lg">
        <Grid container className={classes.grid} justifyContent="space-between">
          <Grid item>
            <Link href="/" passHref>
              <a className={classes.logoLink}>{"iReader"}</a>
            </Link>
          </Grid>
          <Grid item>
            <Grid container className={classes.buttonWrapper}>
              {routes.map((elm, index) => (
                <Grid item key={index} className={classes.linkItem}>
                  <Link href={elm.pathName} passHref>
                    <Button variant="outlined" className={classes.button}>
                      {elm.displayName}
                    </Button>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

NavBarPresentation.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default NavBarPresentation;
