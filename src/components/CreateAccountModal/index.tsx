import { FaTwitter } from "react-icons/fa";
import Modal from "../Modal";
import { Center, ImageContainer, Title } from "./styles";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateAccountModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ImageContainer>
        <FaTwitter className="login-twitter-image" color="#d9d9d9" size="40" />
      </ImageContainer>

      <Center>
        <Title>Criar sua Conta</Title>
        <button>blabla</button>
      </Center>
    </Modal>
  );
};

export default CreateAccountModal;
