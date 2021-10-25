import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import PageWrapper from "../../components/PageWrapper";
import { useGlobalState } from "../../context/GlobalContext";
import { apiWithAuth } from "../../services/api";
import Capitalize from "../../utils/Capitalize";
import {
  FixedContainer,
  FixedFirstChild,
  FixedSecondChild,
  FollowFollowers,
  Main,
  Switcher,
  UserContainer,
} from "./styles";



interface IFollowers {
  id: string;
  name: string;
  bio: string | null;
  username: string;
}

interface IData {
  id: string;
  name: string;
  number_of_followers: 0;
  number_of_follows: 0;
  follows: IFollowers[];
  followers: IFollowers[];
}

const Seguidores: React.FC = () => {
  const [follows, setFollows] = useState<IFollowers[]>();
  const [followers, setFollowers] = useState<IFollowers[]>();
  const [showing, setShowing] = useState("followers")
  const [loading, setLoading] = useState(false);
  const { auth } = useGlobalState();
  const history = useHistory()

  const getProfile = async () => {
    try {
      const { data } = await apiWithAuth.get<IData>("/profile/follows");

      setFollowers(data.followers);
      setFollows(data.follows);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Algo deu Errado!");
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <PageWrapper
      fixedContent={
        <>
          <FixedContainer>
            <FixedFirstChild>
              <Link to="/">
                <BsArrowLeft size="18px" />
              </Link>
            </FixedFirstChild>
            <FixedSecondChild>
              {auth && (
                <>
                  <h1> {Capitalize(auth.user.name)} </h1>
                </>
              )}
            </FixedSecondChild>
            <FollowFollowers>
              <Switcher  onClick={()=>{setShowing("followers")}} isActive={showing === "followers" ? true : false}>Seguidores</Switcher>
              <Switcher  onClick={()=>{setShowing("follows")}}  isActive={showing === "follows" ? true : false}>Seguindo</Switcher>
            </FollowFollowers>
          </FixedContainer>
        </>
      }
    >
      <Main>
        {followers && showing === "followers" &&
          followers.map((follower, index) => (
            <UserContainer key={index}  >
              <img src={`https://robohash.org/${follower.username}`} alt={follower.username} onClick={()=>{history.push(`/perfil/${follower.username}`)}} />
              <div>
                <h2 onClick={()=>{history.push(`/perfil/${follower.username}`)}}>{follower.name}</h2>
                <h3>@{follower.username}</h3>
                <p>{follower.bio && follower.bio.slice(0,48)
                } {follower.bio && follower.bio.length > 50 && "..." } </p>
              </div>
            </UserContainer>
          ))}

{follows && showing === "follows" &&
          follows.map((follow, index) => (
            <UserContainer key={index} >
              <img src={`https://robohash.org/${follow.username}`} alt={follow.username} onClick={()=>{history.push(`/perfil/${follow.username}`)}} />
              <div>
                <h2 onClick={()=>{history.push(`/perfil/${follow.username}`)}} >{follow.name}</h2>
                <h3>@{follow.username}</h3>
                <p>{follow.bio && follow.bio.slice(0,48)
                } {follow.bio && follow.bio.length > 50 && "..." } </p>
              </div>
            </UserContainer>
          ))}
      </Main>
    </PageWrapper>
  );
};
export default Seguidores;
