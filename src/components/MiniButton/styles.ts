import styled, { css } from "styled-components";
import { shade } from "polished";

interface ButtonProps {
  filled?: boolean;
  filledColor?: string | null;
}

export const Container = styled.button<ButtonProps>`
  padding: 5px 10px;
  text-transform: uppercase;
  background: transparent;
  color: rgb(92, 131, 240);
  border: 2px solid rgb(92, 131, 240);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  transition: 0.2s background-color;
  font-weight: 300;
  margin-top: 10px;

  &:hover {
    background: ${shade(0.05, "rgb(92, 131, 240)")};
    color: white;
  }

  svg {
    margin-right: 12px;
  }

  & + button {
    margin-left: 10px;
  }

  ${(props) =>
    props.filled &&
    css`
      background: ${props.filledColor || "rgb(92, 131, 240)"};
      border: 2px solid ${props.filledColor || "rgb(92, 131, 240)"};
      color: white;

      &:hover {
        background: ${shade(0.05, props.filledColor || "rgb(92, 131, 240)")};
      }
    `}
`;
