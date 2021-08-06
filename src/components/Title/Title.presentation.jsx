import React from "react";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useStyles from "./Title.styles";
import PropTypes from "prop-types";
import Link from "next/link";

function TitlePresentation({ children, isLink, href, isMobile }) {
  const classes = useStyles({ isMobile });

  if (isLink) {
    return (
      <Link href={href} passHref>
        <Typography variant="h4" className={classes.title}>
          {children} <ArrowForwardIosIcon />
        </Typography>
      </Link>
    );
  }

  return (
    <Typography variant="h4" className={classes.title}>
      {children} <ArrowForwardIosIcon />
    </Typography>
  );
}

TitlePresentation.propTypes = {
  children: PropTypes.string,
  isLink: PropTypes.bool,
  href: PropTypes.string,
  isMobile: PropTypes.bool,
};

export default TitlePresentation;
