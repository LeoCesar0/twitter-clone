import styled from "styled-components";

interface IProps {
  isOnFocus: boolean
}

export const Container = styled.div<IProps>`
  width: 348px;
  margin-top: 12px;
  padding: 12px;
  display: flex;

  background: #202327;
  border: 1px solid ${props => props.isOnFocus ? props.theme.color.blue : "#253341" };
  border-radius: 40px;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 12px;
    stroke: ${(props) => props.isOnFocus ? props.theme.color.blue : props.theme.color.gray };
  }
`;

export const Input = styled.input`
  height: 18px;
  width: 100%;
  background: none;

  font-size: 15px;
  line-height: 18px;

  &::placeholder {
    color: ${(props) => props.theme.color.gray};
  }
`;
