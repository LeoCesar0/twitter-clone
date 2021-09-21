import { Background, Center } from "./styles";

interface IModal {
  isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void
}

const Modal: React.FC<IModal> = ({ children, isOpen, setIsOpen }) => {
    const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(event.target === event.currentTarget){
            setIsOpen(false)
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
