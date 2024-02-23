import { NameTitle } from "./UserCard.styled";

export const UserCard = ({ user: { name, email } }) => {
  return (
    <div>
      <NameTitle $variant="name">
        <b>Name: </b>
        {name}
      </NameTitle>
      <NameTitle $variant="email">
        <b>Email: </b>
        {email}
      </NameTitle>
    </div>
  );
};
