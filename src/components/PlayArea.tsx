import * as React from "react";
import Deck from "./Deck";

interface PlayAreaProps {
  deck: React.ReactElement[];
  hand: React.ReactElement[];
}

const PlayArea: React.FC<PlayAreaProps> = ({ deck, hand }) => {
  return (
    <div className="flex">
      <div>
        <Deck>{deck}</Deck>
      </div>
      <div className="flex ml-10 space-x-5">{hand}</div>
    </div>
  );
};

export default PlayArea;
