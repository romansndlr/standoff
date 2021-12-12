import * as React from "react";
import { House, Player, StandOff, Table } from "./components";
import { startGame } from "./utils";

function App() {
  React.useEffect(() => {
    startGame();
  }, []);

  return (
    <Table>
      <House />
      <Table.Divider />
      <StandOff />
      <Table.Divider />
      <Player />
    </Table>
  );
}

export default App;
