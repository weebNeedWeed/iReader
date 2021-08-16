import React, { useState } from "react";
import useStyles from "./BookManager.styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { v4 as uuidv4 } from "uuid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function BookManagerPresentation({
  handleSubmitPost,
  listBooks,
  handleSubmitPut,
  handleDelete,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // 0: create 1: update
  const [formType, setFormType] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: uuidv4().slice(0, 8),
    imageUrl: "",
    tag: "",
    _id: "",
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickAction = (event, data) => {
    setAnchorEl(event.currentTarget);
    const { title, description = "", slug, imageUrl, tag, _id } = data;
    setFormType(1);
    setFormData({ title, description, slug, imageUrl, tag, _id });
  };

  const handleCloseAction = () => {
    setAnchorEl(null);
  };

  const handlePostOpen = () => {
    setFormData({
      title: "",
      description: "",
      slug: uuidv4().slice(0, 8),
      imageUrl: "",
      tag: "",
      _id: "",
    });
    setFormType(0);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePutOpen = () => {
    setOpen(true);
  };

  const { title, description, slug, imageUrl, tag } = formData;

  return (
    <>
      <Container maxWidth="xl" disableGutters className={classes.container}>
        <Typography component="h2" className={classes.title}>
          {"Book manager"}
        </Typography>

        <Button
          variant="outlined"
          className={classes.createBtn}
          onClick={handlePostOpen}
        >
          {"Create new book"}
        </Button>

        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table aria-label="table">
            <TableHead>
              <TableRow>
                <TableCell>{"Title"}</TableCell>
                <TableCell>{"Description"}</TableCell>
                <TableCell>{"Slug"}</TableCell>
                <TableCell>{"Tag"}</TableCell>
                <TableCell>{"Actions"}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listBooks.map((elm, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {elm.title}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {elm.description}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {elm.slug}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {elm.tag}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <MoreVertIcon
                      onClick={(event) => handleClickAction(event, elm)}
                      style={{ cursor: "pointer" }}
                    />
                    <Menu
                      id="menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleCloseAction}
                    >
                      <MenuItem onClick={handlePutOpen}>{"Edit"}</MenuItem>
                      <MenuItem onClick={() => handleDelete(formData)}>
                        {"Delete"}
                      </MenuItem>
                      <MenuItem onClick={handleCloseAction}>
                        {"Cancel"}
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {formType ? "Edit" : "Create"}
        </DialogTitle>
        <form>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              type="text"
              name="title"
              fullWidth
              onChange={handleChange}
              value={title}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Description"
              type="text"
              name="description"
              fullWidth
              onChange={handleChange}
              value={description}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Slug"
              type="text"
              name="slug"
              fullWidth
              onChange={handleChange}
              value={slug}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Image Url"
              type="text"
              name="imageUrl"
              fullWidth
              onChange={handleChange}
              value={imageUrl}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Tag"
              type="text"
              name="tag"
              fullWidth
              onChange={handleChange}
              value={tag}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              {"Cancel"}
            </Button>
            <Button
              onClick={(event) =>
                formType === 0
                  ? handleSubmitPost(event, formData)
                  : handleSubmitPut(event, formData)
              }
              color="primary"
            >
              {"Submit"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default BookManagerPresentation;
