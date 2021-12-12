import * as React from "react";
import { useSnapshot } from "valtio";
import Card from "./Card";
import { house } from "../state";
import PlayArea from "./PlayArea";

const House: React.FC = () => {
  const { deck, hand } = useSnapshot(house);

  return (
    <PlayArea
      deck={deck.map((card) => (
        <Card key={card}>
          <Card.Back />
        </Card>
      ))}
      hand={hand.map((card) => (
        <Card key={card}>
          <Card.Back />
        </Card>
      ))}
    />
  );
};

export default House;
