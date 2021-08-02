import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

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
  },
  submit: {
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.85)",
    },
  },
});

export default function Login() {
  const classes = useStyles();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status !== 200) {
      return toast.error("Login failed", { toastId: "loginFailed" });
    }

    toast.success("Login succeed. Redirecting...", { toastId: "loginSucceed" });
    setTimeout(() => {
      router.push("/");
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
          <InputLabel htmlFor="username">{"Username"}</InputLabel>
          <OutlinedInput
            id="username"
            label="Username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
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
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
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
