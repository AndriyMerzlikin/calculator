import { UserCard } from "../UserCard/UserCard";
import { List, ListItem } from "./UserList.styled";

export const UserList = ({ users }) => {
  return (
    <List>
      {users.map((user) => {
        return (
          <ListItem key={user.id}>
            <UserCard user={user} />
          </ListItem>
        );
      })}
    </List>
  );
};
