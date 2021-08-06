import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
    zIndex: 999999,
    backgroundColor: "#ffffff",
    display: (props) => (props.display ? "block" : "none"),
  },
  wrapper: {
    position: "absolute",
    top: "50vh",
    left: "50vw",
    zIndex: 9999999,
    width: "50vw",
    height: "50vh",
    transform: "translate(-50%,-50%)",
  },
});

export default useStyles;
