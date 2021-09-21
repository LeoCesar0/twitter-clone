import { FaTwitter } from "react-icons/fa";
import { Center, ImageContainer, Title } from "./styles";
import Modal from "../Modal";
import Button from "../Button"


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
        <Button width="100%">Botão</Button>
      </Center>
    </Modal>
  );
};

export default CreateAccountModal;
