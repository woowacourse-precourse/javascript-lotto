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
  static lottoNumber(numbers) {
    MissionUtils.Console.print(numbers);
  }
}

module.exports = GamePrint;