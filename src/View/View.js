const MissionUtils = require('@woowacourse/mission-utils');
const { RESULT_MESSAGES } = require('../Constants');

const { Console } = MissionUtils;

class View {
  showMoney(userMoney) {
    Console.print(`${userMoney}`);
  }

  showGenLottos(lottoLists) {
    Console.print(`${lottoLists.length}개를 구매했습니다.`);
    lottoLists.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
  }

  showUserLottosNumber(userLottoNumber) {
    Console.print(`${userLottoNumber}`);
  }

  showUserBonusNumber(userBonusNumber) {
    Console.print(`${userBonusNumber}`);
  }

  showUserLottoResults(lottoResults) {
    Object.values(lottoResults).forEach((count, idx) => {
      Console.print(`${RESULT_MESSAGES[idx]}${count}개`);
    });
  }

  showUserRateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
    Console.close();
  }
}

module.exports = View;
