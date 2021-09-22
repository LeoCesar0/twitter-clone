import styled from "styled-components";

const Input = styled.input`
    position: relative;
  padding: 20px 12px;
  outline: none;
  background: none;
  border: 1px solid rgba(167, 185, 198, 0.3);
  border-radius: 4px;
  color: white;
  font-size: 16px;

  &::placeholder{
      color: rgba(167, 185, 198, 0.45);
  }

  &:focus{
    border-color: ${(props) => props.theme.color};
  }

`;

export default Input;
