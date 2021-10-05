import { Container, FixedContentContainer, ScrollableMain } from "./styles";

interface IProps {
  fixedContent?: JSX.Element;
}

const Main: React.FC<IProps> = ({ children, fixedContent }) => {
  return (
    <Container>
      <FixedContentContainer>{fixedContent}</FixedContentContainer>
      <ScrollableMain>{children}</ScrollableMain>
    </Container>
  );
};

export default Main;
