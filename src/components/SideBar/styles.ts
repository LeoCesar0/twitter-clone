import styled from "styled-components";

interface IProps {
    isActive?: boolean
}

export const Container = styled.div`
  padding: 27px 81px;
  height: 100%;
  display: flex;
  flex-direction: column;

  background: #333;

  .sidebar-logo {
    margin-bottom: 22px;
  }
`;
export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const MenuButton = styled.div<IProps>`
  width: max-content;
  padding: 12px 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  font-weight: 700;

  background: ${(props) => props.isActive ? props.theme.color.blue + "20" : "none"};
  border-radius: 53px;
  cursor: pointer;

`;

export const Title = styled.h1`
  font-size: 19px;
  line-height: 23px;
  margin-left: 20px;
`;
