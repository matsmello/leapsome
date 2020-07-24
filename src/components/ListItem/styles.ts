import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  flex: 1;
  display: flex;
  place-content: center;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  color: rgb(131, 131, 131);

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
      align-items: center;

      p {
        margin-left: 10px;
        margin-top: 4px;
        color: rgb(180, 180, 180);
      }
    }
  }

  transition: 0.2s transform;

  &:hover {
    transform: translate(10px);
  }

  & + div {
    margin-top: 10px;
  }
`;
