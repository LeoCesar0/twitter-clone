import Modal from "../Modal";
import { VscClose } from "react-icons/vsc";
import {
  ImageContainer,
  InfoContainer,
  InputContainer,
  ModalHeader,
} from "./styles";
import Button from "../Button";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const EditProfileModal: React.FC<IProps> = ({ setIsOpen, isOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalHeader>
        <VscClose size="26px" onClick={() => setIsOpen(false)} />
        <h1>Editar perfil</h1>
        <Button variant="white">Salvar</Button>
      </ModalHeader>
      <ImageContainer>
        <img src="https://robohash.org/ex" alt="ex" />
      </ImageContainer>
      <InfoContainer>
        <InputContainer>
          <label>Nome </label>
          <input type="text" value="Leonardo" />
        </InputContainer>
        <InputContainer>
          <label>Bio</label>
          <textarea name="bio" id="">
            aposkdopadkpoad
          </textarea>
        </InputContainer>
        <InputContainer>
          <label>Senha</label>
          <input type="password" value="asudhasud" />
        </InputContainer>
      </InfoContainer>
    </Modal>
  );
};

export default EditProfileModal;
