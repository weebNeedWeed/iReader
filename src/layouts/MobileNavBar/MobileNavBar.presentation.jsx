import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import React from "react";
import useStyles from "./MobileNavBar.styles";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";

function MobileNavBarPresentation(props) {
  const { isOpen, handleClick, routes, loggedIn, currentPathname } = props;
  const classes = useStyles({ isOpen });

  return (
    <>
      <div className={classes.wrapper}>
        <Container maxWidth="lg">
          <Grid
            container
            className={classes.grid}
            justifyContent="space-between"
          >
            <Grid item>
              <Link href="/" passHref>
                <a className={classes.logoLink}>{"iReader"}</a>
              </Link>
            </Grid>
            <Grid item className={classes.buttonWrapper}>
              <Button
                variant="outlined"
                className={classes.button}
                onClick={handleClick}
              >
                <MenuIcon />
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container maxWidth="lg" disableGutters className={classes.container2}>
        <Button
          variant="outlined"
          className={classes.closeButton}
          onClick={handleClick}
        >
          <CloseIcon />
        </Button>
        <Container maxWidth="xs" className={classes.menuWrapper}>
          {routes.map((elm, index) => {
            if (elm.navDisplay) {
              if (loggedIn && elm.navDisplay.whenLogin) {
                return (
                  <Link passHref href={elm.pathName} key={index}>
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      className={classes.menuButton}
                      disabled={currentPathname === elm.pathName}
                    >
                      {elm.displayName}
                    </Button>
                  </Link>
                );
              }
              if (!loggedIn && elm.navDisplay.whenLogout) {
                return (
                  <Link passHref href={elm.pathName} key={index}>
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      className={classes.menuButton}
                      disabled={currentPathname === elm.pathName}
                    >
                      {elm.displayName}
                    </Button>
                  </Link>
                );
              }
            }
          })}
        </Container>
      </Container>
    </>
  );
}

MobileNavBarPresentation.propTypes = {
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default MobileNavBarPresentation;
