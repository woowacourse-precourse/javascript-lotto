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
  static result(prize) {
    for(let rank in prize) {
      if(rank === '5') {
        MissionUtils.Console.print(`${rank}개 일치 (${prize[rank].nonBonus.winningAmount}원) - ${prize[rank].nonBonus.winningAmount}개`);
        MissionUtils.Console.print(`${rank}개 일치, 보너스 볼 일치 (${prize[rank].hasBonus.winningAmount}원) - ${prize[rank].hasBonus.ea}개`);
        continue;
      }
      MissionUtils.Console.print(`${rank}개 일치 (${prize[rank].winningAmount}원) - ${prize[rank].ea}개`);
    }
  }
}

module.exports = GamePrint;