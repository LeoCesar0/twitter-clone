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

interface IUser {
  name: string;
  username: string;
}

const SearchInput = () => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [users, setUsers] = useState<IUser[]>();
  const [search, setSearch] = useState("");

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

  // if(isOnFocus){
  //   const bg = document.querySelector("#to-close-background")
  //   bg?.addEventListener("click",()=>{
  //     console.log("Clicou")
  //   })

  // }

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
          <DropDown>
            {users.map((user, index) => (
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
        )}
      </Container>

      {isOnFocus && 
        <ToCloseBackground id="to-close-background" onClick={()=>{
          isOnFocus && setIsOnFocus(false)
        }} />
      }
    </>
  );
};

export default SearchInput;
