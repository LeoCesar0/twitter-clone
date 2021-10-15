import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-top: 8px;


  input:focus::placeholder {
    position: absolute;
    top: 10px;
    left: 10px;

    font-weight: 500;
    font-size: 11px;
    line-height: 13px;

    transition: 250ms linear;

    color: ${props => props.theme.color.blue} ;
  }
`;


export const Input = styled.input`
  padding: 20px 12px 10px 12px;
  outline: none;
  background: none;
  border: 1px solid rgba(167, 185, 198, 0.3);
  border-radius: 4px;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: rgba(167, 185, 198, 0.45);
  }

  &:focus {
    border-color: ${(props) => props.theme.color};
  }
`;

// export const Label = styled.label`
//   position: absolute;
//   top: 12px;
//   left: 12px;

//   font-weight: 500;
//   font-size: 11px;
//   line-height: 13px;

//   color: rgba(167, 185, 198, 0.45);
// `;