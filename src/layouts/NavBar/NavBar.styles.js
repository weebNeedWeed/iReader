import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wrapper: {
    borderBottom: "1px solid rgba(0,0,0,0.6)",
  },
  logoLink: {
    textDecoration: "none",
    color: "#000000",
    fontWeight: "900",
    letterSpacing: "4px",
    fontSize: "350%",
  },
  grid: {
    margin: "5px 0",
  },
  buttonWrapper: {
    padding: "16px 0",
  },
  button: {
    borderColor: "#000 !important",
  },
  linkItem: {
    "&:not(:last-child)": {
      marginRight: "15px !important",
    },
  },
});

export default useStyles;
