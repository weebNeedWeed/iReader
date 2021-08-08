import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderBottom: "1px solid rgba(0,0,0,0.6) !important",
  },
  logoLink: {
    textDecoration: "none",
    color: "#000000",
    fontWeight: "900 !important",
    letterSpacing: "4px !important",
    fontSize: "350% !important",
  },
  grid: {
    margin: "5px 0 !important",
  },
  button: {
    height: "100% !important",
    border: "1px solid black !important",
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
    position: "absolute !important",
    top: "5% !important",
    right: "10% !important",
    border: "1px solid black !important",
  },
  menuWrapper: {
    position: "absolute !important",
    top: "50% !important",
    left: "50% !important",
    transform: "translate(-50%,-50%) !important",
    textAlign: "center !important",
    width: "80% !important",
  },
  menuButton: {
    border: "1px solid black !important",
    "&:not(:last-child)": {
      marginBottom: "15px !important",
    },
  },
}));

export default useStyles;
