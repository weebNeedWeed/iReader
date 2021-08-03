import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./../../components/Title/Title.index";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "../../components/Divider/Divider.index";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import BookCover from "../../components/BookCover/BookCover.index";
import Typography from "@material-ui/core/Typography";
import useWindowDimensions from "./../../utils/hooks/useWindowDimensions";
import dynamic from "next/dynamic";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.custom.mainContainerMarginTop,
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
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
  formLabel: {
    fontWeight: "900",
    textDecoration: "underline",
  },
  gutterTop: {
    marginTop: "20px",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));

export default function Books() {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const Pagination = dynamic(() => import("@material-ui/lab/Pagination"));

  return (
    <Container maxWidth="md" className={classes.container}>
      <Title>{"Filter"}</Title>
      <form style={{ textAlign: "center", marginTop: "10px" }}>
        <FormLabel component="legend" className={classes.formLabel}>
          {"Category list"}
        </FormLabel>

        {Array.from(Array(10).keys()).map((elm, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox name={elm.toString()} />}
            label={elm}
          />
        ))}

        <Paper component="div" className={classes.form}>
          <InputBase
            className={classes.input}
            placeholder={"Tu khoa"}
            inputProps={{ "aria-label": "Tim kiem truyen" }}
            name="keyword"
          />
          <IconButton className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button
          type="submit"
          variant="contained"
          size="large"
          className={classes.button}
        >
          {"Click to filter "}
        </Button>
      </form>

      <Divider />

      <Title>{"Books"}</Title>
      <Typography variant="subtitle1">{"Tim duoc 1344 ket qua"}</Typography>
      <Grid container spacing={2} className={classes.gutterTop}>
        <BookCover />
      </Grid>

      <Pagination
        count={10}
        className={classes.pagination}
        size={width <= 500 ? "medium" : "large"}
        hideNextButton={width <= 500}
        hidePrevButton={width <= 500}
      />
    </Container>
  );
}
