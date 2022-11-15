const { INPUT } = require('../Resource/String');
const LottoValidator = require('../Lotto.validator');
const MissionUtils = require('@woowacourse/mission-utils');

class InputConsole {
  static readLine(message) {
    let retunrValue = '';
    MissionUtils.Console.readLine(message, (returnMessage) => {
      retunrValue = returnMessage;
    });
    return retunrValue;
  }

  static getMoney() {
    const money = this.readLine(INPUT.GET_MONEY);
    LottoValidator.checkMoney(money);
    return money;
  }

  static getLotto() {
    const lottoNumbersString = this.readLine(INPUT.GET_LOTTO);
    return LottoValidator.splitLottoNumbers(lottoNumbersString);
  }

  static getLottoAdditional(lottoNumbers) {
    const LottoAdditinalNumberString = this.readLine(INPUT.GET_LOTTO_ADDITINAL);
    return LottoValidator.additionalNumber(
      LottoAdditinalNumberString,
      lottoNumbers,
    );
  }
}

module.exports = InputConsole;
