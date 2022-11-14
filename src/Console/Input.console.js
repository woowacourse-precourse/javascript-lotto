const Console = require('./Console');
const { INPUT } = require('../Resource/String');
const LottoValidator = require('../Lotto.validator');

class InputConsole {
  static GetMoney = async () => {
    const money = Console.Input(INPUT.GET_MONEY);
    LottoValidator.checkMoney(money);
    return money;
  };
  static GetLotto = async () => {
    const lottoNumbersString = await Console.Input(INPUT.GET_LOTTO);
    return LottoValidator.splitLottoNumbers(lottoNumbersString);
  };
  static GetLottoAdditional = async (lottoNumbers) => {
    const LottoAdditinalNumberString = await Console.Input(
      INPUT.GET_LOTTO_ADDITINAL,
    );
    return LottoValidator.AdditionalNumber(LottoAdditinalNumberString, lottoNumbers);
  };
}

module.exports = InputConsole;
