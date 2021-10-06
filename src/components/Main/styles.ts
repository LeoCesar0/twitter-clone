import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 100%;
  border-left: 1px solid ${(props) => props.theme.color.borderColor};
  border-right: 1px solid ${(props) => props.theme.color.borderColor};

  display: flex;
  flex-direction: column;
`;

export const FixedContentContainer = styled.div`
  //border-bottom: 1px solid ${(props) => props.theme.color.borderColor};

  position: relative;
`;

export const ScrollableMain = styled.main`
  overflow: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
`;
