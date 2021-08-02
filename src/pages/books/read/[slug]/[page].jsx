import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CustomEditor from "./../../../../components/CustomEditor/CustomEditor.index";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.custom.mainContainerMarginTop,
  },
  link: {
    textDecoration: "underline",
    fontSize: "150%",
    cursor: "pointer",
  },
  title: {
    fontWeight: "bold",
  },
  infoWrapper: {
    textAlign: "left",
  },
  info: {
    textAlign: "center",
  },
}));

export default function Books() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="button" className={classes.link}>
            {"Previous page"}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="button" className={classes.link}>
            {"Next page"}
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="md" className={classes.infoWrapper}>
        <Typography variant="h4" component="h2" className={classes.title}>
          {
            " Lorem ipsum dolcendis ut hic vel ratione asperiores ipsa quisquam adipisci praesentium. Aliquid, ab. "
          }
        </Typography>
        <Typography
          variant="h5"
          style={{ textDecoration: "underline" }}
          className={classes.info}
        >
          {"Title chapter"}
        </Typography>
        <Typography variant="h6" className={classes.info}>
          {"Created at: asdas"}
        </Typography>
        <Typography variant="h6" className={classes.info} gutterBottom>
          {"Posted by: da vu thanh phien"}
        </Typography>
        <CustomEditor
          readOnly
          data={{
            blocks: [
              {
                key: "14465",
                text: "Nửa đêm, Lương Hạnh dường như đã chìm vào trong giấc mơ, nhưng sau đó...",
                type: "unstyled",
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
              {
                key: "8k1l7",
                text: "\nCô mở đôi mắt nặng trĩu, nhất thời sững lại.",
                type: "unstyled",
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
              {
                key: "b5qj0dasda",
                text: "\nThì ra ngay lúc này, nười đàn ông cả tuần mới về một lần kia đang đứng bên cạnh cô, ánh đèn vàng ấm áp nơi đầu giường rọi lên người anh, soi tỏ làn da nửa thân trên cùng cánh tay thon dài, nhìn qua thật là đẹp.",
                type: "unstyled",
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
              {
                key: "7fu8a",
                text: "\nLương Hạnh sững sờ.",
                type: "unstyled",
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
            ],
            entityMap: {},
          }}
        />
      </Container>
    </Container>
  );
}
