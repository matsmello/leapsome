import React from "react";
import { Container } from "./styles";

const Button: React.FC = (props) => <Container>{props.children}</Container>;

export default Button;
