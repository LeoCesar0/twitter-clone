import { Container, ImageContainer, InfoContainer, Message, Name, UserName } from "./styles";

interface IProps {
    name: string,
    username: string
}

const Tweet: React.FC<IProps> = ({ children, name, username }) => {
  return <Container>
      <ImageContainer>
        <img src={`https://robohash.org/${username}`} alt={username} />
      </ImageContainer>
      <InfoContainer>
          <Name> {name} <UserName> @{username} </UserName> </Name>
          <Message> {children} </Message>
      </InfoContainer>

  </Container>;
};

export default Tweet;
