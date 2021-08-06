import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";

const useStyles = makeStyles({
  container: {
    marginTop: "90px",
    textAlign: "center",
  },
  form: {
    border: "1px solid black",
    padding: "20px",
    borderRadius: "5px",
  },
  formControl: {
    marginBottom: "15px",
    "&:last-child": {
      marginBottom: "0",
    },
  },
  submit: {
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.85)",
    },
    marginTop: "15px",
  },
  link: {
    cursor: "pointer",
    textDecoration: "underline",
  },
});

export default function Register() {
  const classes = useStyles();
  const router = useRouter();

  const handleSubmit = async (event) => {};

  return (
    <Container maxWidth="xs" className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Typography variant="h3" gutterBottom>
          {"Register"}
        </Typography>
        <FormControl
          variant="outlined"
          required
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="username">{"Username"}</InputLabel>
          <OutlinedInput id="username" label="Username" name="username" />
        </FormControl>

        <FormControl
          variant="outlined"
          required
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="email">{"Email"}</InputLabel>
          <OutlinedInput id="email" label="Email" name="email" type="email" />
        </FormControl>

        <FormControl
          variant="outlined"
          required
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="password">{"Password"}</InputLabel>
          <OutlinedInput
            id="password"
            label="Password"
            name="password"
            type="password"
          />
        </FormControl>

        <FormControl variant="outlined" required fullWidth>
          <InputLabel htmlFor="repeatPassword">{"Repeat password"}</InputLabel>
          <OutlinedInput
            id="repeatPassword"
            label="Repeat password"
            name="repeatPassword"
            type="password"
          />
        </FormControl>

        <Grid container justifyContent="space-between">
          <Grid item>
            <Link href="/login" passHref>
              <Typography variant="button" className={classes.link}>
                {"Login"}
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/forgotpassword" passHref>
              <Typography variant="button" className={classes.link}>
                {"Forgot password"}
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          type="submit"
          fullWidth
          className={classes.submit}
        >
          {"Register"}
        </Button>
      </form>
    </Container>
  );
}
