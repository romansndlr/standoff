import * as React from "react";
import { useSnapshot } from "valtio";
import { player } from "../state";
import Card from "./Card";
import PlayArea from "./PlayArea";

const Player: React.FC = () => {
  const { hand, deck } = useSnapshot(player);

  return (
    <PlayArea
      deck={deck.map((card) => (
        <Card
          className="cursor-pointer"
          key={card}
          onClick={() => {
            if (hand.length === 3) return;

            player.draw();
          }}
        >
          <Card.Back />
        </Card>
      ))}
      hand={hand.map((card) => (
        <Card
          className="cursor-pointer animate-scale-down"
          key={card}
          onClick={() => {
            player.play(card);
          }}
        >
          <Card.Front>{card}</Card.Front>
        </Card>
      ))}
    />
  );
};

export default Player;
