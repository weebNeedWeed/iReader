import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  button: {
    height: "100% !important",
    border: "1px solid black",
  },
  container2: ({ isOpen }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    opacity: isOpen ? 1 : 0,
    zIndex: isOpen ? 1000 : -999999,
    transition: theme.transitions.create(["all"], { duration: "0.1s" }),
  }),
  closeButton: {
    position: "absolute",
    top: "5%",
    right: "10%",
    border: "1px solid black",
  },
  menuWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
  },
  menuButton: {
    border: "1px solid black",
    "&:not(:last-child)": {
      marginBottom: "15px",
    },
  },
}));

export default useStyles;
