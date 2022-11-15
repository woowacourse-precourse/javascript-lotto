const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGES } = require('./constants');
const GameUtils = require('./Utils/GameUtils');

class GamePrint {
  static sheets(sheets) {
    MissionUtils.Console.print(`${sheets}${MESSAGES.GAME.BUY_SHEET}`);
  }
  
  static lottoList(lottos) {
    lottos.forEach(lotto => {
      lotto = lotto.join(', ');
      lotto = `[${lotto}]`;
      MissionUtils.Console.print(lotto);
    });    
  }
  
  static result(prize, profitRate) {
    MissionUtils.Console.print(MESSAGES.GAME.RESULT_HEADER);
    for(let rank in prize) {
      if(rank === '5') {
        MissionUtils.Console.print(`${rank}개 일치 (${GameUtils.addComma(prize[rank].nonBonus.winningAmount)}원) - ${prize[rank].nonBonus.ea}개`);
        MissionUtils.Console.print(`${rank}개 일치, 보너스 볼 일치 (${GameUtils.addComma(prize[rank].hasBonus.winningAmount)}원) - ${prize[rank].hasBonus.ea}개`);
        continue;
      }
      MissionUtils.Console.print(`${rank}개 일치 (${GameUtils.addComma(prize[rank].winningAmount)}원) - ${prize[rank].ea}개`);
    }
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

module.exports = GamePrint;