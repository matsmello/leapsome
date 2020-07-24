import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: block;
  flex: 1;
  max-height: 400px;
  margin: 30px;
  padding: 30px;
  border-radius: 10px;

  -webkit-box-shadow: 7px 14px 16px 1px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 7px 14px 16px 1px rgba(0, 0, 0, 0.14);
  box-shadow: 7px 14px 16px 1px rgba(0, 0, 0, 0.14);

  h1 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  transition: 0.3s box-shadow ease-in-out;

  &:hover {
    -webkit-box-shadow: 7px 14px 16px 1px rgb(92, 131, 240);
    -moz-box-shadow: 7px 14px 16px 1px rgb(92, 131, 240);
    box-shadow: 7px 14px 16px 1px rgb(92, 131, 240);
  }
`;
