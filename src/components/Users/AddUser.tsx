import React, { FC } from "react";

const AddUser: FC = (props) => {
  const addUserHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="userName">Username</label>
      <input id="userName" type="text" />
      <label htmlFor="userAge">Age (Years)</label>
      <input id="userAge" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
