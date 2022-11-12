const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require('./constants');

class GamePrint {
  static sheets(sheets) {
    MissionUtils.Console.print(`${sheets}${MESSAGES.GAME.buySheets}`);
  }
  static userLottos(lottos) {
    lottos.forEach(lotto => {
      MissionUtils.Console.print(lotto);
    });    
  }
}

module.exports = GamePrint;