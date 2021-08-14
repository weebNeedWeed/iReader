import React from "react";
import AdminUserPresentation from "./AdminUser.presentation";

function AdminUser(props) {
  const { listAdminUsers } = props;
  const parsedList = JSON.parse(listAdminUsers);

  return <AdminUserPresentation {...props} listAdminUsers={parsedList} />;
}

export default AdminUser;
