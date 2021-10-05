import styled from "styled-components";

interface IProps {
  isOnFocus: boolean;
}

export const Container = styled.div<IProps>`
  width: 348px;
  margin-top: 12px;
  padding: 12px;
  display: flex;
  position: relative;

  background: #202327;
  border: 1px solid
    ${(props) => (props.isOnFocus ? props.theme.color.blue : "#253341")};
  border-radius: 40px;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 12px;
    stroke: ${(props) =>
      props.isOnFocus ? props.theme.color.blue : props.theme.color.gray};
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

export const DropDown = styled.div`
  position: absolute;
  padding: 20px;
  width: 100%;
  left: 0;
  top: calc(100% + 8px);
  border: 1px solid #2f3336;
  border-radius: 8px;

  box-shadow: 2px 2px 8px 0px #74747440;

  img {
    width: 50px;
    height: auto;
    border-radius: 50%;
    margin-right: 10px;
  }

  h1 {
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
  }

  h2 {
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;

    color: ${props => props.theme.color.gray};
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  

  &:not(:last-child){
    margin-bottom: 14px;
  }
`;
