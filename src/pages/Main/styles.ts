import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  border: 1px solid black;

  footer {
    padding: 25px 0;
    color: rgb(200, 200, 200);
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;

    cursor: pointer;
  }

  .card {
    flex-direction: row;
  }
`;
export const SideMenu = styled.div`
  max-width: 280px;

  header {
    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }

    h1 {
      margin-top: 10px;
    }

    strong {
      font-weight: 200;
      color: rgb(200, 200, 200);
      font-size: 20px;
      padding: 20px 0px 0px 0px;
      display: block;
    }
  }

  h3 {
    font-weight: 400;
    color: rgb(120, 120, 120);
    font-size: 21px;
  }
`;
