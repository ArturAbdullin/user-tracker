import React, { FC } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser: FC = (props) => {
  const addUserHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">Username</label>
        <input id="userName" type="text" />
        <label htmlFor="userAge">Age (Years)</label>
        <input id="userAge" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
