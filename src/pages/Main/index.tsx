import React from "react";
import Button from "./../../components/Button/index";
import SimpleListItem from "./../../components/SimpleListItem";
import ListItem from "./../../components/ListItem/index";
import Card from "./../../components/Card";
import model from "./../../assets/me.jpeg";

import { FiSettings } from "react-icons/fi";
import { SideMenu, Container } from "./styles";

const Main: React.FC = () => (
  <Container>
    <SideMenu>
      <header>
        <img src={model} />
        <h1>Lucy Andrews</h1>
        <strong>Head of Sales</strong>
      </header>

      <Button icon={FiSettings}></Button>

      <h3>Direct colleagues</h3>
      <SimpleListItem />
      <SimpleListItem />
    </SideMenu>
    <Card>
      <header>
        <h1>Good evening, Lucy! 👋</h1>
      </header>

      <ListItem />

      <footer>
        <strong>MORE</strong>
      </footer>
    </Card>
  </Container>
);

export default Main;
