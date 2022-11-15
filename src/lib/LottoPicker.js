const { Random } = require('@woowacourse/mission-utils');
const { LOTTO } = require('../constant/Constant');

class LottoPicker {
  static pickMultipleSortedLotto(lottoCount) {
    const producedLottos = Array(lottoCount)
      .fill()
      .map(() => Random.pickUniqueNumbersInRange(LOTTO.MIN_NO, LOTTO.MAX_NO, LOTTO.COUNT));

    this.#sortLottos(producedLottos);
    return producedLottos;
  }

  static #sortLottos(producedLotto) {
    producedLotto.map((lotto) =>
      lotto.sort((firstNumber, secondNumber) => firstNumber - secondNumber)
    );
  }
}

module.exports = LottoPicker;
