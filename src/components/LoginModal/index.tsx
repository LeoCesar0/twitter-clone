import { FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { useHistory } from 'react-router-dom'

import { Center, ImageContainer, Title, InputContainer } from "./styles";

import Modal from "../Modal";
import Button from "../Button";
import Input from "../Input";
import { toast } from "react-toastify";
import { api } from "../../services/api";

import validateLoginFields from "../../utils/validateLoginFields";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const LoginModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  const isDisabled =
    email === "" ||
    password === "" ||
    loading;

  const createAccount = async () => {
    const validation = validateLoginFields(
      email,
      password
    );

    if (validation !== true) {
      toast.error(validation);
    }

    setLoading(true);

    // Post Users

    try {
      await api.post("/login", {
        email,
        password
      });

      history.push("/")
    } catch (error) {
      console.log({ error });
      toast.error(error?.response?.data?.message[0] || "Não foi possível fazer login!");
    }

    setLoading(false);
  };

  function onClose() {
    setEmail("");
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
          <Title>Entre no twitter</Title>
          <Input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button width="100%" isDisabled={isDisabled} onClick={createAccount}>
            Fazer login
          </Button>
        </InputContainer>
      </Center>
    </Modal>
  );
};

export default LoginModal;
