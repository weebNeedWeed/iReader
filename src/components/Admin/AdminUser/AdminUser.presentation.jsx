import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyle from "./AdminUser.styles";

function AdminUserPresentation({ listAdminUsers }) {
  const classes = useStyle();

  return (
    <Container maxWidth="xl" disableGutters className={classes.container}>
      <Typography component="h2" className={classes.title}>
        {"Admin user"}
      </Typography>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{"Username"}</TableCell>
              <TableCell>{"Email"}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listAdminUsers.map((elm, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {elm.username}
                </TableCell>
                <TableCell component="th" scope="row">
                  {elm.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default AdminUserPresentation;
