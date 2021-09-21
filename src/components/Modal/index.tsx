import { Background, Center } from "./styles";

const Modal: React.FC = ({ children }) => {
  return (
    <Background>
      <Center>{children}</Center>
    </Background>
  );
};

export default Modal;
