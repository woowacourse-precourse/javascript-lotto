const Player = require("./Player");
const MissionUtils = require("@woowacourse/mission-utils");

const { INGAME_INPUT } = require("./constants");

class App {
  play() {
    MissionUtils.Console.readLine(INGAME_INPUT.AMOUNT, (amount) => {
      const player = new Player();
      player.buyTickets(Number(amount));
    });
  }
}

module.exports = App;
