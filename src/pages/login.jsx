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

export default function Login({ setLoading }) {
  const classes = useStyles();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status !== 200) {
      const { message } = await response.json();
      setTimeout(() => {
        setLoading(false);
        return toast.error(message, { toastId: "loginFailed" });
      }, 2000);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      toast.success("Login succeed. Redirecting...", {
        toastId: "loginSucceed",
      });
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }, 2000);
  };

  return (
    <Container maxWidth="xs" className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Typography variant="h3" gutterBottom>
          {"Login"}
        </Typography>
        <FormControl
          variant="outlined"
          required
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="username">{"Username or Email"}</InputLabel>
          <OutlinedInput
            id="username"
            label="Username or Email"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormControl>
        <FormControl variant="outlined" required fullWidth>
          <InputLabel htmlFor="password">{"Password"}</InputLabel>
          <OutlinedInput
            id="password"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Link href="/register" passHref>
              <Typography variant="button" className={classes.link}>
                {"Register"}
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/forgotpassword" passHref>
              <Typography variant="button" className={classes.link}>
                {"forgot password"}
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
          {"Login"}
        </Button>
      </form>
    </Container>
  );
}
