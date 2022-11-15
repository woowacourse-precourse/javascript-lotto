const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Constants');

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
    const resultMessages = [
      '3개 일치 (5,000원) - ',
      '4개 일치 (50,000원) - ',
      '5개 일치 (1,500,000원) - ',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
      '6개 일치 (2,000,000,000원) - ',
    ];
    Object.values(lottoResults).forEach((count, idx) => {
      Console.print(`${resultMessages[idx]}${count}개`);
    });
  }

  showUserRateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

module.exports = View;
