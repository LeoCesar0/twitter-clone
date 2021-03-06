import {
  Container,
  DropDown,
  Input,
  ToCloseBackground,
  UserContainer,
} from "./styles";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { apiWithAuth } from "../../services/api";
import { useHistory } from "react-router";

interface IUser {
  name: string;
  username: string;
}

const SearchInput = () => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [users, setUsers] = useState<IUser[]>();
  const [search, setSearch] = useState("");
  const history = useHistory()

  const getUsers = async () => {
    const { data } = await apiWithAuth.get(`/users?search=${search}`);

    setUsers(data);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getUsers();
    }, 1100);

    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <Container isOnFocus={isOnFocus}>
        <FiSearch />
        <Input
          placeholder="Buscar no Twitter"
          onFocus={() => {
            setIsOnFocus(true);
          }}
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></Input>

        {users && isOnFocus && (
          <DropDown id="dropdown">
            {users.map((user, index) => (
              <UserContainer key={index}>
                <img
                  src={`https://robohash.org/${user.username}`}
                  alt={user.username}
                  onClick={() => {
                    // window.location.href = `/perfil/${user.username}`;
                    history.push(`/perfil/${user.username}`)  ;
                  }}
                />
                <div>
                  <h1
                    onClick={() => {
                      history.push(`/perfil/${user.username}`)  ;
                    }}
                  >
                    {user.name}
                  </h1>
                  <h2>@{user.username}</h2>
                </div>
              </UserContainer>
            ))}
          </DropDown>
        )}
      </Container>

      {isOnFocus && (
        <ToCloseBackground
          onClick={() => {
            isOnFocus && setIsOnFocus(false);
          }}
        />
      )}
    </>
  );
};

export default SearchInput;
