import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  background-color: #ffffff45;

  width: 100%;
  height: 100%;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 9999;
`;

export const Center = styled.div`
width: 600px;
  position: absolute;
  min-width: 300px;
  min-height: 500;

  padding: 20px 35px;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  border-radius: 20px;
  background-color: black;

`;
