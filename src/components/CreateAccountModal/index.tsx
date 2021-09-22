import { FaTwitter } from "react-icons/fa";
import { Center, ImageContainer, Title, InputContainer } from "./styles";
import { useState } from "react";

import Modal from "../Modal";
import Button from "../Button";
import Input from "../Input";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateAccountModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  console.log({name, email, username, password})

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ImageContainer>
        <FaTwitter className="login-twitter-image" color="#d9d9d9" size="40" />
      </ImageContainer>

      <Center >
        <InputContainer>
        <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <Input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Title>Criar sua Conta</Title>
          <Button width="100%">Botão</Button>
        </InputContainer>
      </Center>
    </Modal>
  );
};

export default CreateAccountModal;
