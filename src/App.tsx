import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { AppUser } from "./models/appUser";

import "./index.css";
import { AddUserEventHandler } from "./models/eventHandlers";

function App() {
  const [users, setUsers] = useState<AppUser[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const addUserHandler: AddUserEventHandler = (user) => {
    setUsers((prevState) => {
      const newUsersList = [...prevState, user];
      if (newUsersList.length > 0) setIsEmpty(false);
      return newUsersList;
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {!isEmpty && <UsersList users={users} />}
    </>
  );
}

export default App;
