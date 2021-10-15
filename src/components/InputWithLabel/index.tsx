import { Input } from "./styles";
import { Container } from "./styles";
import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputWithLabel: React.FC<IProps> = ({ children, label, ...rest }) => {


  return (
    <Container>
      <Input {...rest}>{children}</Input>
    </Container>
  );
};

export default InputWithLabel;
