import { Background, Center } from "./styles";
import { useEffect } from "react";

interface IModal {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose?: () => void;
}

const Modal: React.FC<IModal> = ({ children, isOpen, setIsOpen, onClose }) => {
  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
      onClose && onClose();
    }
  };

  const closeESC = (event: { keyCode: number }) => {
    if (event.keyCode === 27) {
      setIsOpen(false);
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeESC);

    return () => {document.removeEventListener("keydown", closeESC);}
  }, []);

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
