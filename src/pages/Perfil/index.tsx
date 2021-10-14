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
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { apiWithAuth } from "../../services/api";
import Capitalize from "../../utils/Capitalize";
import FormatDate from "../../utils/FormatDate";
import { toast } from "react-toastify";

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
}

function Perfil() {
  const [profile, setProfile] = useState<IPerfil>();

  const getProfile = async () => {
    try {
      const { data } = await apiWithAuth.get("/profile");

      setProfile(data);
    } catch (error) {
      toast.error(error?.response?.data?.message[0] || "Algo deu Errado!")
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
        <MainContainer>
          <ImageContainer>
            <img
              src={`https://robohash.org/${profile.username}`}
              alt={profile.username}
            />
            <button>Editar perfil</button>
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
      )}
    </PageWrapper>
  );
}

export default Perfil;
