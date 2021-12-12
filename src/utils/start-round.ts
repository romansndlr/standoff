import sleep from "./sleep";
import { house, player } from "../state";
import startGame from "./start-game";

export default async function () {
  if (player.deck.length === 0) {
    alert("The house wins, you suck!");

    await sleep(1000);

    return startGame();
  }

  if (house.deck.length === 0) {
    alert("You win! Congratulations!");

    await sleep(1000);

    return startGame();
  }

  await sleep(500);

  house.draw();

  await sleep(500);

  house.draw();

  await sleep(500);

  house.play();
}
