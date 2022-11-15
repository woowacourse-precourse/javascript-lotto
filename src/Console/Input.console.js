const { INPUT } = require('../Resource/String');
const LottoValidator = require('../Lotto.validator');
const MissionUtils = require('@woowacourse/mission-utils');

class InputConsole {
  static readLine(message) {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(message, resolve);
    });
  }

  static async getMoney() {
    const money = await this.readLine(INPUT.GET_MONEY);
    LottoValidator.checkMoney(money);
    return money;
  }

  static async getLotto() {
    const lottoNumbersString = await this.readLine(INPUT.GET_LOTTO);
    return LottoValidator.splitLottoNumbers(lottoNumbersString);
  }

  static async getLottoAdditional(lottoNumbers) {
    const LottoAdditinalNumberString = await this.readLine(
      INPUT.GET_LOTTO_ADDITINAL,
    );
    return LottoValidator.additionalNumber(
      LottoAdditinalNumberString,
      lottoNumbers,
    );
  }
}

module.exports = InputConsole;
