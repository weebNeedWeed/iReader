import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  container: {
    marginTop: "30vh",
    textAlign: "center",
  },
  text: {
    fontSize: "200%",
    fontWeight: "bold",
  },
  button: {
    marginTop: "15px",
    width: "80%",
  },
});

export default function Logout({ setLoading }) {
  const classes = useStyles();
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    await fetch("/api/auth/logout");

    setTimeout(() => {
      setLoading(false);
      window.location = "/user/login";
    }, 2000);
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Typography variant="h4" className={classes.text}>
        {"Đây là trang đăng xuất!"}
      </Typography>
      <Typography variant="h4" className={classes.text}>
        {"Bạn có muốn tiếp tục ?"}
      </Typography>
      <Button
        variant="contained"
        onClick={handleLogout}
        color="secondary"
        className={classes.button}
      >
        {"Đăng xuất ngay"}
      </Button>
      <Button
        variant="outlined"
        onClick={handleBackToHome}
        className={classes.button}
      >
        {"Về trang chủ"}
      </Button>
    </Container>
  );
}
