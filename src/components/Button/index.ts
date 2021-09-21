import styled from "styled-components";

interface IProps {
    width?: string
    height?: string
}

const Button = styled.button<IProps>`
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
  color: #fff;
  background-color: ${(props) => props.theme.color.blue};
  width: ${(props) => props.width || "105px"};
  height: ${(props) => props.height || "39px"};
`;


export default Button