import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "220px",
    width: "148px",
    margin: "auto",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundImage:
      "url('https://tamlinh247.com/uploads/images/wp-content/uploads/26-4.jpg')",
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
  chapter: {
    fontSize: "160%",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    right: "5%",
    top: "5%",
    color: "white",
    padding: "5px",
    border: "1px solid black",
    borderRadius: "50%",
  },
}));

export default useStyles;
