import styled from "styled-components";

export const UserName = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 15px;

  border-bottom: 1px solid ${(props) => props.theme.color.borderColor};

  font-size: 15px;
  line-height: 18px;

  color: #ffffff;
`;

export const TweetContainer = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 1px solid ${(props) => props.theme.color.borderColor};
  }

  button {
    margin-left: auto;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;

    height: 10px;
    width: 100%;
    background: ${(props) => props.theme.color.darkGray};
  }
`;

export const TweetInput = styled.input`
  margin-left: 12px;
  font-size: 19px;
  line-height: 23px;
  background: none;
  width: 100%;

  color: ${(props) => props.theme.color.gray};
`;
