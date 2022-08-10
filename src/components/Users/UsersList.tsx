import React, { FC } from "react";
import styles from "./UsersList.module.css";
import Card from "../UI/Card";
import { AppUser } from "../../models/appUser";

type UsersListProps = {
  users: AppUser[];
};

const UsersList: FC<UsersListProps> = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
