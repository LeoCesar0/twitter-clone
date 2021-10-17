import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  const [tweetInputContent, setTweetInputCotent] = useState("");
  const [loading, setLoading] = useState(false)

  const {
    auth: { user },
  } = useGlobalState() as { auth: IAuth };

  const postTweet = async () => {
    try {
      await apiWithAuth.post("/tweets", { content: tweetInputContent });

      await getFeed();
      setTweetInputCotent("");
    } catch (error) {
      toast.error(
        error?.response?.data?.message.join(". ") ||
          "Não foi possível criar um Tweet"
      );
    }
  };

  const getFeed = async () => {
    setLoading(true)
    try {
      const { data } = await apiWithAuth.get<ITweet[]>("/feed");

      setTweets(data);
    } catch (error) {
      toast.error(
        error?.response?.data?.message.join(". ") ||
          "Não foi possível carregar o feed"
      );
    }
    setLoading(false)
  };

  useEffect(() => {
    getFeed();
  }, []);

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
              <TweetInput
                placeholder="O que está acontecendo?"
                value={tweetInputContent}
                onChange={(e) => setTweetInputCotent(e.target.value)}
              />
            </div>
            <Button onClick={postTweet} isDisabled={loading || tweetInputContent === "" } >Tweet</Button>
          </TweetContainer>
        </>
      }
    >
      {tweets &&
        tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            name={tweet.user.name}
            username={tweet.user.username}
          >
            {tweet.content}
          </Tweet>
        ))}
    </PageWrapper>
  );
}

export default Home;
