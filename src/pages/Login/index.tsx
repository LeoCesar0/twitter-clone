import { Button, Container, ImgContainer, RightContainer } from "./styles";
import bgImg from "../../assets/images/Outdoor.png";
import { FaTwitter } from "react-icons/fa";
import Modal from "../../components/Modal";

const Login: React.FC = () => {
  return (
    <Container>
      <Modal>
        <h1>Esse é um modal</h1>
        <button>blabla</button>
      </Modal>
      <ImgContainer>
        <img src={bgImg} alt="Twitter Background" />
      </ImgContainer>

      <RightContainer >

        <FaTwitter color="#d9d9d9" size="40" />
        <h1>Acontecendo Agora</h1>
        <h2>Inscreva-se no Twitter hoje mesmo.</h2>

        <div className="login-buttons">
        <Button>Inscreva-se com Google</Button>
        <Button>Inscreva-se com Apple</Button>
        <Button>Inscreva-se com número de celular o...</Button>
        </div>
        <p>Já tem uma conta? <span>Entre</span></p>
      </RightContainer>

    </Container>
  );
};

export default Login;
