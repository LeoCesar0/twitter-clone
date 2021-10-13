import styled from "styled-components";

export const FixedContainer = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.borderColor};
`;

export const FixedFirstChild = styled.div`
  margin: 0 24px;
`;

export const FixedSecondChild = styled.div`
  h1 {
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;

    color: #d9d9d9;
  }

  h2 {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    color: #6d777c;
  }
`;
