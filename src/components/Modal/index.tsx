import { Background, Center } from "./styles";

interface IModal {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void
  onClose: () => void
}

const Modal: React.FC<IModal> = ({ children, isOpen, setIsOpen, onClose }) => {
    const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(event.target === event.currentTarget){
            setIsOpen(false)
            onClose()
        }
    }

  return (
    <>
      {isOpen && (
        <Background onClick={closeModal}>
          <Center>{children}</Center>
        </Background>
      )}
    </>
  );
};

export default Modal;
