import { Button, Container, ImgContainer, RightContainer } from "./styles";
import { useState } from "react";

import bgImg from "../../assets/images/Outdoor.png";
import { FaTwitter } from "react-icons/fa";
import CreateAccountModal from "../../components/CreateAccountModal";

const Login: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false)


  return (
    <Container>
      <CreateAccountModal isOpen={isCreateAccountModalOpen} setIsOpen={setIsCreateAccountModalOpen} />

      <ImgContainer>
        <img src={bgImg} alt="Twitter Background" />
      </ImgContainer>

      <RightContainer >

        <FaTwitter color="#d9d9d9" size="40" />
        <h1>Acontecendo Agora</h1>
        <h2>Inscreva-se no Twitter hoje mesmo.</h2>

        <div className="login-buttons">
        <Button onClick={() => {setIsCreateAccountModalOpen(true)}}>Inscreva-se com Email</Button>
        </div>
        <p>Já tem uma conta? <span>Entre</span></p>
      </RightContainer>

    </Container>
  );
};

export default Login;
