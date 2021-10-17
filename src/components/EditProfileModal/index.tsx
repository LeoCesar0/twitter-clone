import Modal from "../Modal";
import { VscClose } from "react-icons/vsc";
import {
  InfoContainer,
  InputContainer,
  ModalHeader,
} from "./styles";
import Button from "../Button";
import { useState } from "react";
import { apiWithAuth } from "../../services/api";
import { toast } from "react-toastify";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  getProfile: () => void
}

const EditProfileModal: React.FC<IProps> = ({ setIsOpen, isOpen, getProfile }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false)

  const isDisabled = (name === "" && password === "" && bio === "") || (password.length > 0 && password.length < 8 ) || loading



  const updateUser = async () => {
    setLoading(true)
    let requestBody = {};

    if (name !== "") {
      requestBody = { ...requestBody, name };
    }

    if (bio !== "") {
      requestBody = { ...requestBody, bio };
    }

    if (password.length >= 8) {
      requestBody = { ...requestBody, password };
    }

    console.log(requestBody)

    try{
      await apiWithAuth.put("/profile", requestBody);
      handleCloseModal(true)

    } catch(error){
      console.log(error)
      toast.error(error?.response?.data?.message || "Não foi possível editar o perfil" )
    }

    setLoading(false)
  };


  const handleCloseModal = (reloadPage = false) => {
    setName("")
    setPassword("")
    setBio("")
    setIsOpen(false)
    reloadPage && getProfile()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={handleCloseModal} >
      <ModalHeader>
        <VscClose size="26px" onClick={()=>{handleCloseModal()}} />
        <h1>Editar perfil</h1>
        <Button variant="white" onClick={updateUser} isDisabled={isDisabled} >
          Salvar
        </Button>
      </ModalHeader>
      
      <InfoContainer>
        <InputContainer>
          <label>Nome </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <label>Bio</label>
          <textarea
            name="bio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          ></textarea>
        </InputContainer>
        <InputContainer>
          <label>Senha</label>
          <input
          placeholder="Senha (min. 8 caracteres)"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputContainer>
      </InfoContainer>
    </Modal>
  );
};

export default EditProfileModal;
