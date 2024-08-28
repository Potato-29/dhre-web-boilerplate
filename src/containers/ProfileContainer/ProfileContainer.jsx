import React from "react";
import { useSelector } from "react-redux";

const ProfileContainer = () => {
  let { loginUser: user } = useSelector((state) =>
    state ? state.root.login : []
  );
  return (
    <div>
      <h1>User Info</h1>
      <div>Name: {user.email}</div>
    </div>
  );
};

export default ProfileContainer;
