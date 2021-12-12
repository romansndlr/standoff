import max from "lodash.max";
import { proxy } from "valtio";
import { spliceByValue } from "../utils";
import standoff from "./standoff";

interface HouseState {
  hand: number[];
  deck: number[];
  draw: () => void;
  play: () => void;
}

const state = proxy<HouseState>({
  hand: [],
  deck: [],
  draw: () => {
    const card = state.deck.pop() as number;

    state.hand.push(card);
  },
  play: () => {
    const card = max(state.hand) as number;

    spliceByValue(state.hand, card);

    standoff.house = card;
  },
});

export default state;
