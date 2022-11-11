const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require('./constants');

class GamePrint {
  static sheets(sheets) {
    MissionUtils.Console.print(`${sheets}${MESSAGES.GAME.buySheets}`);
  }
}

module.exports = GamePrint;