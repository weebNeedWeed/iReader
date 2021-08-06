import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    textDecoration: "underline overline",
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: (props) => (props.isMobile ? "200%" : "250%"),
  },
});

export default useStyles;
