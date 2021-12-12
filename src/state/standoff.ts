import { proxy } from "valtio";

interface StandoffState {
  player: number | null;
  house: number | null;
}

const state = proxy<StandoffState>({ player: null, house: null });

export default state;
