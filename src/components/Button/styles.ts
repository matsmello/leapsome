import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  width: 180px;
  padding: 10px 5px;
  text-transform: uppercase;
  background: rgb(92, 131, 240);
  color: white;
  border: 0;
  margin: 20px 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;

  -webkit-box-shadow: 7px 14px 16px 1px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 7px 14px 16px 1px rgba(0, 0, 0, 0.14);
  box-shadow: 7px 14px 16px 1px rgba(0, 0, 0, 0.14);

  transition: 0.2s background-color;

  &:hover {
    background: ${shade(0.2, "rgb(92, 131, 240)")};
  }

  svg {
    margin-right: 12px;
  }
`;
