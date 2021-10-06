import Button from "../../components/Button";
import PageWrapper from "../../components/PageWrapper";
import Tweet from "../../components/Tweet";
import { IAuth, useGlobalState } from "../../context/GlobalContext";
import { TweetContainer, TweetInput, UserName } from "./styles";

function Home() {
  const {
    auth: { user },
  } = useGlobalState() as { auth: IAuth };

  const tweets: JSX.Element[] = [];

  for (let i = 0; i <= 20; i++) {
    tweets.push(
      <Tweet key={i} name={user.name} username={user.username}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sunt
        error aliquid libero eius maxime accusamus facilis molestiae impedit
        optio beatae, rerum officiis id mollitia quaerat neque quis odit? Quae?
      </Tweet>
    );
  }

  return (
    <PageWrapper
      fixedContent={
        <>
          <UserName>{user.name}</UserName>
          <TweetContainer>
            <div>
              <img
                src={`https://robohash.org/${user.username}`}
                alt={user.username}
              />
              <TweetInput placeholder="O que está acontecendo?" />
            </div>
            <Button>Tweet</Button>
          </TweetContainer>
        </>
      }
    >
      {tweets}

      {/* <Tweet name={user.name} username={user.username}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sunt error aliquid libero eius maxime accusamus facilis molestiae impedit optio beatae, rerum officiis id mollitia quaerat neque quis odit? Quae?
      </Tweet> */}
    </PageWrapper>
  );
}

export default Home;
