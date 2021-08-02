import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.custom.mainContainerMarginTop,
    textAlign: "center",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    margin: "0 auto",
  },
  input: {
    width: "100%",
    padding: "5px",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
  },
}));

function Search() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <form>
        <Paper component="div" className={classes.form}>
          <InputBase
            className={classes.input}
            placeholder={"Tìm Truyện"}
            inputProps={{ "aria-label": "Tim kiem truyen" }}
            name="keyword"
          />

          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button
          type="submit"
          variant="contained"
          size="large"
          className={classes.button}
        >
          {"tìm "} <SearchIcon />
        </Button>
      </form>
    </Container>
  );
}

export default Search;
