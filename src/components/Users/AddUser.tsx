import React, { FC, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser: FC = (props) => {
  const [enteredUsername, setEnteredUsername] = useState<string>("");
  const [enteredUserage, setEnteredUserage] = useState<string>("");

  const addUserHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredUserage);
  };

  const usernameChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredUsername(event.target.value);
  };

  const userageChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredUserage(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">Username</label>
        <input id="userName" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="userAge">Age (Years)</label>
        <input id="userAge" type="number" onChange={userageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
