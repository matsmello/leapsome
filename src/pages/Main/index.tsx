import React, { useState } from "react";
import Button from "./../../components/Button/index";
import SimpleListItem from "./../../components/SimpleListItem";
import ListItem from "./../../components/ListItem/index";
import Card from "./../../components/Card";
import model from "./../../assets/me.jpeg";

import { FiSettings, FiChevronDown } from "react-icons/fi";
import { SideMenu, Container } from "./styles";

const Main: React.FC = () => {
  const [examples] = useState([
    {
      message: "Lucy, please write your assessment for Daniel Goldstein",
      createdAt: "5 hours ago",
      actions: ["New", "To Do"],
    },
    {
      message: "Lucy, please select your peers",
      createdAt: "6 hours ago",
      actions: ["To Do"],
    },
    {
      message: "Lucy, please complete your self-assessments",
      createdAt: "8 hours ago",
      actions: ["New", "To Do"],
    },
    {
      message:
        "Leapsome Videos Demos needs your input - please answer a few question as soon as possible",
      createdAt: "10 hours ago",
      actions: ["New"],
    },
  ]);

  return (
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

      <section>
        <Card title="Good evening, Lucy! 👋" listItems={examples} />
        <Card title="Good evening, Lucy! 👋" listItems={examples} />
      </section>
    </Container>
  );
};

export default Main;
