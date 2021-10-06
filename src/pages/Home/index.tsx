import { useEffect, useState } from "react";
import Button from "../../components/Button";
import PageWrapper from "../../components/PageWrapper";
import Tweet from "../../components/Tweet";
import { IAuth, useGlobalState } from "../../context/GlobalContext";
import { apiWithAuth } from "../../services/api";
import { TweetContainer, TweetInput, UserName } from "./styles";

interface ITweet {
  id: string;
  content: string;
  user: {
    id: string;
    name: string;
    bio: null;
    username: string;
    email: string;
  };
  created_at: string;
  updated_at: string;
}

function Home() {
  const [tweets, setTweets] = useState<ITweet[]>([]);

  const {
    auth: { user },
  } = useGlobalState() as { auth: IAuth };

  const getFeed = async () => {
    const { data } = await apiWithAuth.get<ITweet[]>("/feed");

    setTweets(data)
    console.log(data)
  };

  useEffect(()=>{
    getFeed()
  },[])


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

      {tweets && tweets.map((tweet)=>
        <Tweet key={tweet.id} name={tweet.user.name} username={tweet.user.username}>
          {tweet.content}
      </Tweet> 
      )}

     
    </PageWrapper>
  );
}

export default Home;
