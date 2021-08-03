import React from "react";
import useStyles from "./Divider.styles";

function Divider() {
  const classes = useStyles();

  return <hr className={classes.hr} />;
}

export default Divider;
