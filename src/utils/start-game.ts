import chunk from "lodash.chunk";
import range from "lodash.range";
import shuffle from "lodash.shuffle";
import startRound from "./start-round";
import { house, player } from "../state";

const TOTAL_DECK_SIZE = 20;
const TOTAL_PLAYERS = 2;

export default function () {
  const deck = range(1, TOTAL_DECK_SIZE + 1);

  const shuffledDeck = shuffle(deck);

  const [houseDeck, playerDeck] = chunk(
    shuffledDeck,
    deck.length / TOTAL_PLAYERS
  );

  house.deck = houseDeck;
  player.deck = playerDeck;

  startRound();
}
