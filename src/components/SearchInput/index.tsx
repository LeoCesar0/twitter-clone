import { Container, DropDown, Input, UserContainer } from "./styles";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const MockUsers = [
  {
    name: "Ricardo",
    username: "rickardo",
  },
  {
    name: "Fernanda",
    username: "fefa",
  },
  {
    name: "Fernando",
    username: "fefo",
  },
];

interface IUser {
  name: string;
  username: string;
}

const SearchInput = () => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [users, setUsers] = useState<IUser[]>(MockUsers);

  return (
    <Container isOnFocus={isOnFocus}>
      <FiSearch />
      <Input
        placeholder="Buscar no Twitter"
        onFocus={() => {
          setIsOnFocus(true);
        }}
        onBlur={() => {
          setIsOnFocus(false);
        }}
      ></Input>

      <DropDown>
        {users &&
          users.map((user, index) => (
            <UserContainer key={index}>
              <img
                src={`https://robohash.org/${user.username}`}
                alt={user.username}
              />
              <div>
                <h1>{user.name}</h1>
                <h2>@{user.username}</h2>
              </div>
            </UserContainer>
          ))}
      </DropDown>
    </Container>
  );
};

export default SearchInput;
