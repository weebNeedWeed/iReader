import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  container: {
    paddingTop: "42px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  title: {
    fontSize: "24px",
    lineHeight: "30px",
    letterSpacing: "0.3px",
    color: "#252733",
    fontWeight: "500",
  },
  actionButton: {
    cursor: "pointer",
  },
  tableContainer: {
    marginTop: "54px",
  },
});

export default useStyle;
