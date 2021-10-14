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

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 22px;
  border-bottom: 1px solid ${props => props.theme.color.borderColor};
`;

export const ImageContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  button {
    height: max-content;
    background: none;
    color: white;
    padding: 8px 16px;
    border: 1px solid ${(props) => props.theme.color.borderColor};
    border-radius: 53px;
  }
`;

export const NameContainer = styled.div``;

export const InfoContainer = styled.div`
  padding-left: 24px;

  h1 {
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;

    color: #d9d9d9;
  }

    h2 {
      font-size: 14px;
      line-height: 17px;
      color: #6d777c;
      margin-bottom: 12px;
    }

    .bio {
      font-size: 15px;
      line-height: 18px;
      color: #d9d9d9;
      margin-bottom: 12px;
    }

    .joined_at {
      font-size: 15px;
      line-height: 18px;
      color: #6d777c;
      svg{
          margin-right: 8px;
      }
    }
`;

export const FollowerCountContainer = styled.div`
    margin-top: 12px;
    display: flex;
    gap: 8px;

    p{
        color: #6d777c;
    }

    span{
        color: #d9d9d9;
    }
`;
