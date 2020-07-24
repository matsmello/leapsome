import React from "react";

const Main: React.FC = () => (
  <Container>
    <SideMenu>
      <header>
        <img />
        <h1>Lucy Andrews</h1>
        <strong>Head of Sales</strong>
      </header>
      <Button></Button>

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
