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

export default function Register({ setLoading }) {
  const classes = useStyles();
  const router = useRouter();
  const [state, setState] = useState({
    username: "",
    password: "",
    displayName: "",
    email: "",
    repeatPassword: "",
  });

  const { username, password, displayName, email, repeatPassword } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password, displayName, email, repeatPassword } = state;

    if (!username || !password || !email || !repeatPassword) {
      return toast.error("nhap thieu", { toastId: "missing" });
    }

    const mailCheckRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(mailCheckRegex)) {
      return toast.error("mail khong chuan form", {
        toastId: "mailNotMatch",
      });
    }

    if (displayName.length < 5 || displayName.length > 50) {
      return toast.error(
        "display name phai dai hon 4 ky tu va be hon 50 ky tu",
        { toastId: "displayNameLength" },
      );
    }

    if (username.length < 5 || username.length > 50) {
      return toast.error("username phai dai hon 4 ky tu va be hon 50 ky tu", {
        toastId: "usernameLength",
      });
    }

    if (repeatPassword !== password) {
      return toast.error("password phai bang repeat password", {
        toastId: "notEqualPass",
      });
    }

    const passwordCheckRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/;
    if (!password.match(passwordCheckRegex)) {
      return toast.error(
        "password phai dai hon 8 ky tu, co it nhat 1 chu in hoa, so, chu in thuong",
        { toastId: "passwordError" },
      );
    }

    setLoading(true);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });

    if (response.status !== 200) {
      const { message } = await response.json();
      setTimeout(() => {
        setLoading(false);
        return toast.error(message, { toastId: "registerFailed" });
      }, 2000);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      toast.success("Register succeed. Please login to your new account!", {
        toastId: "registerSucceed",
      });
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }, 2000);
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

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
          <InputLabel htmlFor="email">{"Email"}</InputLabel>
          <OutlinedInput
            id="email"
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleChangeInput}
          />
        </FormControl>

        <FormControl
          variant="outlined"
          required
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="displayName">{"Display name"}</InputLabel>
          <OutlinedInput
            id="displayName"
            label="DisplayName"
            name="displayName"
            value={displayName}
            onChange={handleChangeInput}
          />
        </FormControl>

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
            onChange={handleChangeInput}
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
            onChange={handleChangeInput}
          />
        </FormControl>

        <FormControl variant="outlined" required fullWidth>
          <InputLabel htmlFor="repeatPassword">{"Repeat password"}</InputLabel>
          <OutlinedInput
            id="repeatPassword"
            label="Repeat password"
            name="repeatPassword"
            type="password"
            value={repeatPassword}
            onChange={handleChangeInput}
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
