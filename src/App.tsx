import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { AppUser } from "./models/appUser";

import "./index.css";

function App() {
  return (
    <>
      <AddUser />
      <UsersList users={[new AppUser('John', 31)]} />
    </>
  );
}

export default App;
