import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import { IconBaseProps } from "react-icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  filled?: boolean;
  filledColor?: string | null;
}

const MiniButton: React.FC<ButtonProps> = ({
  filled,
  filledColor,
  icon: Icon,
  ...props
}) => (
  <Container filled={filled} filledColor={filledColor}>
    {Icon && <Icon />}
    {props.children}
  </Container>
);

export default MiniButton;
