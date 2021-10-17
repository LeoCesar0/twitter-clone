import styled from "styled-components";

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 26px;

  h1 {
    margin-left: 30px;
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;

    color: #d9d9d9;
  }

  button {
    margin-left: auto;
  }

  svg{
      cursor: pointer;
  }
`;



export const InfoContainer = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 12px;
  border: 1px solid rgba(167, 185, 198, 0.3);
  border-radius: 4px;
  font-size: 16px;

  margin-bottom: 26px;

  input {
    outline: none;
    background: none;
    color: white;
    font-size: 16px;
  }

  textarea{
    background: none;
    color: white;
    font-size: 16px;
    border: none;
    outline: none;
  }

  label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: rgba(167, 185, 198, 0.45);
  }
`;
