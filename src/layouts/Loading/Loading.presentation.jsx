import React from "react";
import useStyles from "./Loading.styles";
import Image from "next/image";
import PropTypes from "prop-types";

function LoadingPresentation({ loading }) {
  const classes = useStyles({ display: loading });

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Image src="/images/loading.svg" alt="ireader loading" layout="fill" />
      </div>
    </div>
  );
}

LoadingPresentation.propTypes = {
  loading: PropTypes.bool,
};

export default LoadingPresentation;
