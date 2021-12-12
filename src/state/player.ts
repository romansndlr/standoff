import { proxy } from "valtio";
import { settleRound, sleep, spliceByValue } from "../utils";
import standoff from "./standoff";

interface PlayerState {
  hand: number[];
  deck: number[];
  draw: () => void;
  play: (card: number) => void;
}

const state = proxy<PlayerState>({
  hand: [],
  deck: [],
  draw: () => {
    const card = state.deck.pop() as number;

    state.hand.push(card);
  },
  play: async (card) => {
    standoff.player = card;

    spliceByValue(state.hand, card);

    await sleep(1000);

    settleRound();
  },
});

export default state;
