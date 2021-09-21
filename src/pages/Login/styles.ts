import styled from "styled-components";


export const Button = styled.button`
  height: 49px;
  width: 381px;
  padding: 14px, 92px, 14px, 92px;

  border-radius: 70px;
  border: 0;
  background-color: #fff;
  color: #000;
  cursor: pointer;

  font-size: 16px;
  font-weight: 700;

  line-height: 21px;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ImgContainer = styled.div`
  height: 100vh;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  margin-left: 30px;
  margin-top: 177px;
  display: flex;
  flex-direction: column;

  h1{
    font-size: 64px;
    font-weight: bold;
    line-height: 83px;
    margin-top: 60px;
  }

  h2{
    font-size: 31px;
    line-height: 40px;
    font-weight: bold;
  }

  h1,
  h2 {
    margin-bottom: 32px;
    color: #d9d9d9;
  }

  .login-buttons{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 24px;
  }

  p{
    font-size: 16px;
    line-height: 19px;
    margin-top: 26px;
  }

 p span{
   color: ${(props) => props.theme.color.blue};
   cursor: pointer;
 }
`;
