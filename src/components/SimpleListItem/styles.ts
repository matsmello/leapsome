import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  flex: 1;
  display: flex;
  place-content: center;
  justify-content: center;
  align-items: center;
  height: 80px;

  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 10px;
  }

  strong {
    font-size: 18px;
    font-weight: 300;
  }

  div {
    flex: 1;

    & > div {
      flex: 1;
      flex-direction: row;
      display: flex;
    }
  }
`;
