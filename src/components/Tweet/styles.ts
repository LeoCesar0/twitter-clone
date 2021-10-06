import styled from "styled-components";

export const Container = styled.div`
  padding: 12px 15px;
  display: flex;
  gap: 10px;

  &:not(:last-child){
    border-bottom: 1px solid ${(props) => props.theme.color.borderColor};
  }
`;

export const ImageContainer = styled.div`
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.color.borderColor};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Name = styled.h2`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`;

export const UserName = styled.span`
  font-size: 12px;
  line-height: 14px;
  margin-left: 5px;

  color: #8899a6;
`;

export const Message = styled.p`
  font-size: 12px;
  line-height: 14px;
`;
