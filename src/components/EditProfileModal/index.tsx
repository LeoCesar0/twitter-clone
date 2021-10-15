import Modal from "../Modal"
import {VscClose} from "react-icons/vsc"
import { ImageContainer, InfoContainer, InputContainer, ModalHeader } from "./styles"
import Input from "../Input"

interface IProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const EditProfileModal: React.FC<IProps> = ({children, setIsOpen, isOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <ModalHeader>
                <VscClose size="16px" />
            </ModalHeader>
            <ImageContainer>
                <img src="https://robohash.org/ex" alt="ex" />
            </ImageContainer>
            <InfoContainer>
                <InputContainer>
                    <label >Nome</label>
                    <Input type="text" value="Leo" placeholder="Seu nome" />
                </InputContainer>
                <InputContainer>
                    <label >Bio</label>
                    <textarea name="bio" id="" >
                        aposkdopadkpoad
                    </textarea>
                </InputContainer>
                <InputContainer>
                    <label >Site</label>
                    <Input type="text" value="SITE" placeholder="Seu site" />
                </InputContainer>
                
            </InfoContainer>
        </Modal>
    )
}


export default EditProfileModal