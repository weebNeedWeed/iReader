import React from "react";

function Profile(props) {
  const user = JSON.parse(props.user);
  return (
    <>
      <div>username: {user.username}</div>
      <div>email: {user.email}</div>
      <div>displayName: {user.displayName}</div>
    </>
  );
}

export default Profile;
