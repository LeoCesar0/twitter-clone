import PageWrapper from "../../components/PageWrapper";
import {
  FixedContainer,
  FixedFirstChild,
  FixedSecondChild,
  FollowerCountContainer,
  ImageContainer,
  InfoContainer,
  MainContainer,
} from "./styles";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { apiWithAuth } from "../../services/api";
import Capitalize from "../../utils/Capitalize";
import FormatDate from "../../utils/FormatDate";
import { toast } from "react-toastify";
import Tweet from "../../components/Tweet";
import EditProfileModal from "../../components/EditProfileModal";
import Button from "../../components/Button";
import { IAuth, useGlobalState } from "../../context/GlobalContext";

interface ITweet {
  id: string;
  content: string;
}

interface IPerfil {
  id: string;
  name: string;
  bio: string | null;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
  number_of_followers: number;
  number_of_follows: number;
  tweets: ITweet[];
  isFollowing?: boolean
}

interface IParams {
  username: string;
}

function Perfil() {
  const [profile, setProfile] = useState<IPerfil>();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { username } = useParams<IParams>();

  const {
    auth: { user },
  } = useGlobalState() as { auth: IAuth };

  let isMyProfile = !username || username === user.username;

  console.log(isMyProfile);

  const getProfile = async () => {
    try {
      const { data } = await apiWithAuth.get(
        isMyProfile ? "/profile" : `/users/${username}`
      );

      setProfile(data);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Algo deu Errado!");
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
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
                {profile && (
                  <>
                    <h1> {Capitalize(profile.name)} </h1>
                    <h2> {profile.tweets.length} Tweets </h2>
                  </>
                )}
              </FixedSecondChild>
            </FixedContainer>
          </>
        }
      >
        {profile && (
          <>
            <MainContainer>
              <ImageContainer>
                <img
                  src={`https://robohash.org/${profile.username}`}
                  alt={profile.username}
                />
                {isMyProfile ? (
                  <Button
                    variant="black"
                    width="max-content"
                    onClick={() => setIsEditProfileModalOpen(true)}
                  >
                    Editar perfil
                  </Button>
                ) : (
                  <Button
                  variant={profile.isFollowing ? "black" : "white" }
                    width="max-content"
                  >
                    { profile.isFollowing ? "Seguindo" : "Seguir" }
                  </Button>
                )}
              </ImageContainer>
              <InfoContainer>
                <h1>{Capitalize(profile.name)}</h1>
                <h2>@{profile.username}</h2>
                <p className="bio">{profile?.bio}</p>
                <p className="joined_at">
                  <FaCalendarAlt></FaCalendarAlt>
                  Ingressou em{" "}
                  {FormatDate(profile.created_at).month +
                    " de " +
                    FormatDate(profile.created_at).year}
                </p>
                <FollowerCountContainer>
                  <p>
                    {" "}
                    <span>{profile.number_of_follows}</span> Seguindo
                  </p>
                  <p>
                    {" "}
                    <span>{profile.number_of_followers} </span> Seguidores
                  </p>
                </FollowerCountContainer>
              </InfoContainer>
            </MainContainer>
            {profile.tweets.map((tweet) => (
              <Tweet
                key={tweet.id}
                name={profile.name}
                username={profile.username}
              >
                {tweet.content}
              </Tweet>
            ))}
          </>
        )}
      </PageWrapper>

      {profile && (
        <EditProfileModal
          isOpen={isEditProfileModalOpen}
          setIsOpen={setIsEditProfileModalOpen}
          getProfile={getProfile}
        />
      )}
    </>
  );
}

export default Perfil;
