import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  background-color: #ffffff45;

  width: 100%;
  height: 100%;
`;

export const Center = styled.div`
  position: absolute;
  min-width: 300px;
  min-height: 500;

  padding: 0 35px;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  border-radius: 20px;
  background-color: black;
`;
