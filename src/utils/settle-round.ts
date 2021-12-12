import shuffle from "lodash.shuffle";
import startRound from "./start-round";
import { standoff, house, player } from "../state";

export default function () {
  const playerCard = standoff.player as number;
  const houseCard = standoff.house as number;
  const winner = playerCard > houseCard ? player : house;

  const prize = [
    ...house.hand,
    ...player.hand,
    standoff.house,
    standoff.player,
  ] as number[];

  house.hand = [];
  player.hand = [];
  standoff.player = null;
  standoff.house = null;

  winner.deck.push(...prize);
  winner.deck = shuffle(winner.deck);

  startRound();
}
