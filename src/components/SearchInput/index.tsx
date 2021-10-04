import { Container, Input } from "./styles";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const SearchInput = () => {
  const [isOnFocus, setIsOnFocus] = useState(false);

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
    </Container>
  );
};

export default SearchInput;
