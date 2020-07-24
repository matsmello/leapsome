import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { IconBaseProps } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<InputProps> = ({ icon: Icon, ...props }) => (
  <Container>
    {Icon && <Icon />}
    My settings
  </Container>
);

export default Button;
