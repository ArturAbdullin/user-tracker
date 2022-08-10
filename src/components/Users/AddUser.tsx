import React, { FC, useState } from "react";
import { AppUser } from "../../models/appUser";
import { AddUserEventHandler } from "../../models/eventHandlers";
import { InputError } from "../../models/inputError";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

type AddUserProps = {
  onAddUser?: AddUserEventHandler;
};

const AddUser: FC<AddUserProps> = (props) => {
  const [enteredUsername, setEnteredUsername] = useState<string>("");
  const [enteredUserage, setEnteredUserage] = useState<string>("");
  const [error, setError] = useState<InputError>();

  const addUserHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserage.trim().length === 0
    ) {
      setError(
        new InputError(
          "Invalid input",
          "Please enter a valid name and age (non-empty values)."
        )
      );
      return;
    }
    if (+enteredUserage < 1) {
      setError(new InputError("Invalid age", "Please enter a valid age (> 0)"));
      return;
    }

    props.onAddUser?.(new AppUser(enteredUsername, +enteredUserage));

    setEnteredUsername("");
    setEnteredUserage("");
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

  const errorHandler = () => {
    setError(undefined);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">Username</label>
          <input
            value={enteredUsername}
            id="userName"
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="userAge">Age (Years)</label>
          <input
            value={enteredUserage}
            id="userAge"
            type="number"
            onChange={userageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
