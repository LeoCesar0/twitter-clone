import { FaTwitter } from "react-icons/fa";
import { Center, ImageContainer, Title, InputContainer } from "./styles";
import { useState } from "react";

import Modal from "../Modal";
import Button from "../Button";
import Input from "../Input";
import validateCreateAccountFields from "../../utils/validateCreateAccountFields";
import { toast } from "react-toastify";
import { api } from "../../services/api";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateAccountModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const isDisabled =
    name === "" ||
    email === "" ||
    username === "" ||
    password === "" ||
    loading;

  const createAccount = async () => {
    const validation = validateCreateAccountFields(
      name,
      email,
      username,
      password
    );


    if (validation !== true) {
      toast.error(validation);
      return
    }

    setLoading(true);

    // Post Users

    try {
      await api.post("/users", {
        name,
        email,
        username,
        password,
      });

      toast.success("Usuário criado com sucesso.");
      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Algo deu errado!");
    }

    setLoading(false);
  };

  function onClose() {
    setName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose}>
      <ImageContainer>
        <FaTwitter className="login-twitter-image" color="#d9d9d9" size="40" />
      </ImageContainer>

      <Center>
        <InputContainer>
          <Title>Criar sua Conta</Title>
          <Input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button width="100%" isDisabled={isDisabled} onClick={createAccount}>
            Cadastrar
          </Button>
        </InputContainer>
      </Center>
    </Modal>
  );
};

export default CreateAccountModal;
