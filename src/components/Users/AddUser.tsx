import React, { FC, useState, useRef } from "react";
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
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<InputError>();

  const addUserHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current?.value;
    const enteredAge = ageInputRef.current?.value;
    if (
      !enteredName ||
      !enteredAge ||
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError(
        new InputError(
          "Invalid input",
          "Please enter a valid name and age (non-empty values)."
        )
      );
      return;
    }
    if (+enteredAge < 1) {
      setError(new InputError("Invalid age", "Please enter a valid age (> 0)"));
      return;
    }

    props.onAddUser?.(new AppUser(enteredName, +enteredAge));

    // not a good idea to manipulate
    // the ref value directly
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(undefined);
  };

  return (
    <>
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
          <input id="userName" type="text" ref={nameInputRef} />
          <label htmlFor="userAge">Age (Years)</label>
          <input id="userAge" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
