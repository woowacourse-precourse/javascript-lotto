const Console = require('./Console');
const { INPUT } = require('../Resource/String');
const LottoValidator = require('../Lotto.validator');

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
  static getLottoAdditional = async (lottoNumbers) => {
    const LottoAdditinalNumberString = await Console.input(
      INPUT.GET_LOTTO_ADDITINAL,
    );
    return LottoValidator.additionalNumber(LottoAdditinalNumberString, lottoNumbers);
  };
}

module.exports = InputConsole;
