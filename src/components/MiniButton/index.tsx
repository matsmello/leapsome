import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { IconBaseProps } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const MiniButton: React.FC<InputProps> = ({ icon: Icon, ...props }) => (
  <Container>
    {Icon && <Icon />}
    {props.children}
  </Container>
);

export default MiniButton;
