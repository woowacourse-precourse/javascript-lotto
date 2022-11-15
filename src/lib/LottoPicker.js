const { Random } = require('@woowacourse/mission-utils');
const { LOTTO } = require('../constant/Constant');

class LottoPicker {
  static #sortLottos(producedLotto) {
    producedLotto.map((lotto) =>
      lotto.sort((firstNumber, secondNumber) => firstNumber - secondNumber)
    );
  }
}

module.exports = LottoPicker;
