const { Console } = require("@woowacourse/mission-utils");
const { GAME_START_MESSAGE } = require("./constant");
const { gameStartCallback } = require("./utils/cbFn");

class GameUtils {
  purchasedCostInput() {
    Console.readLine(GAME_START_MESSAGE, gameStartCallback);
  }
}

const game = new GameUtils();

module.exports = {
  game,
};
