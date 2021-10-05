import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 100%;
  border-left: 1px solid ${(props) => props.theme.color.borderColor};
  border-right: 1px solid ${(props) => props.theme.color.borderColor};
  padding: 0 15px;

  display: flex;
  flex-direction: column;

  
`;

export const FixedContentContainer = styled.div`
  height: 70px;
  //border-bottom: 1px solid ${(props) => props.theme.color.borderColor};

  position: relative;

  &::after{
    content: "";
    width: calc(100% + 30px);
    height: 1px;
    position: absolute;
    bottom: 0;
    left: -15px;
    background: ${(props) => props.theme.color.borderColor};
  }
`;

export const ScrollableMain = styled.main`
  overflow: auto;
  flex: 1;


&::-webkit-scrollbar
{
    width: 0px;
	display: none;
}

  
`;
