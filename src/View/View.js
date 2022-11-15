const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE, RESULT_MESSAGES } = require('../Constants');

const { Console } = MissionUtils;

class View {
  showMoney(userMoney) {
    Console.print(`${MESSAGE.INPUT_MONEY} \n ${userMoney}`);
  }

  showGenLottos(lottoLists) {
    Console.print(`${lottoLists.length}개를 구매했습니다.`);
    lottoLists.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
  }

  showUserLottosNumber(userLottoNumber) {
    Console.print(`${MESSAGE.INPUT_LOTTONUMBERS} ${userLottoNumber}`);
  }

  showUserBonusNumber(userBonusNumber) {
    Console.print(`${MESSAGE.INPUT_BONUSNUMBER} ${userBonusNumber}`);
  }

  showUserLottoResults(lottoResults) {
    Object.values(lottoResults).forEach((count, idx) => {
      Console.print(`${RESULT_MESSAGES[idx]}${count}개`);
    });
  }

  showUserRateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

module.exports = View;
