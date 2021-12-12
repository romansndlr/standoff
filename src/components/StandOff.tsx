import * as React from "react";
import { useSnapshot } from "valtio";
import { Card } from ".";
import { standoff } from "../state";

const StandOff: React.FC = () => {
  const { player, house } = useSnapshot(standoff);

  return (
    <div className="flex items-center justify-center h-[204px]">
      {house && (
        <div className="flex flex-col items-center">
          <Card className="animate-scale-down">
            {standoff.player ? <Card.Front>{house}</Card.Front> : <Card.Back />}
          </Card>
          <p className="mt-4 text-xl font-semibold text-white">House</p>
        </div>
      )}
      {player && (
        <div className="flex flex-col items-center ml-11">
          <Card className="animate-scale-down">
            <Card.Front>{player}</Card.Front>
          </Card>
          <p className="mt-4 text-xl font-semibold text-white">You</p>
        </div>
      )}
    </div>
  );
};

export default StandOff;
