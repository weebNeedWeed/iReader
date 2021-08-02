import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "220px",
    width: "148px",
    margin: "auto",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundImage: "url('https://img.8cache.com/hot-1.jpg')",
    cursor: "pointer",
    position: "relative",
    transition: theme.transitions.create() + " !important",
    "&:hover": {
      opacity: "0.9",
      "& $bookName": {
        opacity: "1",
        backgroundColor: "rgba(0,0,0)",
      },
    },
  },
  bookName: {
    color: "white",
    position: "absolute",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    fontSize: "90%",
    textAlign: "center",
  },
}));

export default useStyles;
