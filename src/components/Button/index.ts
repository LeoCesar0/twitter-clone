import styled from "styled-components";

interface IProps {
    width?: string
    height?: string
    isDisabled?: boolean
    variant?: 'blue' | 'white' | 'black'
}

const Button = styled.button<IProps>`
  border-radius: 50px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
  color: ${props => props.variant === 'white' ? 'black' : 'white' };
  background-color: ${(props) => props.variant === 'blue' || !props.variant ? props.theme.color.blue : props.variant };
  border: ${props => props.variant === 'black' ? '1px solid' + props.theme.color.borderColor : 'none' };
  

  width: ${(props) => props.width || "105px"};
  height: ${(props) => props.height || "39px"};

  opacity: ${(props) => props.isDisabled ? '0.5' : '1'};
  pointer-events: ${props => props.isDisabled ? "none" : "all"};
 /* ${props => props.isDisabled ? "cursor: auto;" : "cursor: pointer;"}*/
`;


export default Button