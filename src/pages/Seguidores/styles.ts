import styled from "styled-components";

interface ISwitcher {
  isActive: boolean;
}

export const FixedContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  border-bottom: 1px solid ${(props) => props.theme.color.borderColor};
`;

export const FixedFirstChild = styled.div`
  margin: 0 24px;
`;

export const FixedSecondChild = styled.div`
  flex: 1;
  padding: 22px 0;

  h1 {
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;

    color: #d9d9d9;
  }
`;

export const FollowFollowers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Switcher = styled.h3<ISwitcher>`
  padding: 22px 0;
  position: relative;
  cursor: pointer;

  transition: 300ms;

  color: ${(props) => (props.isActive ? "#d9d9d9" : "#6D777C")};

  &::after {
    content: "";
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 64px;
    transition: 300ms;

    background: ${(props) =>
      props.isActive ? props.theme.color.blue : "transparent"};
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
`;

export const UserContainer = styled.div`
  display: flex;
  padding-bottom: 16px;
  padding-top: 8px;

  img {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }

  h2 {
    margin-top: 12px;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    cursor: pointer;
    color: #ffffff;
  }

  h3 {
    margin-bottom: 8px;
    font-size: 15px;
    line-height: 18px;

    color: #8899a6;
  }

  p {
    font-size: 15px;
    line-height: 18px;

    color: #ffffff;
  }
`;
