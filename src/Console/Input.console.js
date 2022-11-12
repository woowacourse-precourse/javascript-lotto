const Console = require('./Console');
const { INPUT } = require('../Resource/String');
const { LottoValidator } = require('../LottoDto');

class InputConsole {
  static getMoney = async () => {
    const money = Console.input(INPUT.GET_MONEY);
    LottoValidator.checkMoney(money);
    return money;
  };
  static getLotto = async () => {
    const lottoNumbersString = await Console.input(INPUT.GET_LOTTO);
    return LottoValidator.splitLottoNumbers(lottoNumbersString);
  };
}

module.exports = InputConsole;
