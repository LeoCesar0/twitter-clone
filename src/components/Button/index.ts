import styled from "styled-components";

interface IProps {
    width?: string
    height?: string
    isDisabled?: boolean
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

  opacity: ${(props) => props.isDisabled ? '0.5' : '1'};
  pointer-events: ${props => props.isDisabled ? "none" : "all"};
 /* ${props => props.isDisabled ? "cursor: auto;" : "cursor: pointer;"}*/
`;


export default Button