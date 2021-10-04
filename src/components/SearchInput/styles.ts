import styled from "styled-components";

export const Container = styled.div`
  width: 348px;
  margin-top: 12px;
  padding: 12px;
  display: flex;

  background: #202327;
  border: 1px solid #253341;
  border-radius: 40px;
  align-items: center;

  & > svg {
    width: 16px;
    height: 16px;
    margin-right: 12px;
    color: ${(props) => props.theme.color.gray};
  }
`;

export const Input = styled.input`
  height: 18px;

  background: none;

  font-size: 15px;
  line-height: 18px;

  &::placeholder {
    color: ${(props) => props.theme.color.gray};
  }
`;
