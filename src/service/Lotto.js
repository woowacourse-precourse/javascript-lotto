const { Random } = require("@woowacourse/mission-utils");
const { NUMBERS } = require("../constants/constants");
const { isDuplicated, isOutOfRange } = require("../utils/utils");

class Lotto {
  static #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  static generateOneLottoNumbers = () => {
    const sixNumbers = Random.pickUniqueNumbersInRange(
      NUMBERS.MIN_LOTTO_NUM,
      NUMBERS.MAX_LOTTO_NUM,
      NUMBERS.LOTTO_NUM_AMOUNT
    );
    const sortedSixNumbers = Lotto.sortInOrder(sixNumbers);
    return sortedSixNumbers;
  };

  static sortInOrder = (numbersArr) => {
    return numbersArr.sort((a, b) => a - b);
  };

  static generateAllLottoNumbers = (amount) => {
    const lottoNumbers = [];

    for (let i = 0; i < amount; i++) {
      lottoNumbers.push(Lotto.generateOneLottoNumbers());
    }
    return lottoNumbers;
  };

  static validateLottoNumbers = (lottoNumbers) => {
    const tempAmount = 2;
    lottoNumbers.forEach((eachLotto) => {
      if (eachLotto.length !== NUMBERS.LOTTO_NUM_AMOUNT)
        throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
      if (isDuplicated(eachLotto))
        throw new Error(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);
      if (isOutOfRange(eachLotto))
        throw new Error(ERROR_MESSAGES.INVALID_LOTTO_RANGE);
    });

    if (lottoNumbers.length !== tempAmount)
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_AMOUNT);

    return true;
  };

  static setLottoNumbers = (lottoNumbers) => {
    Lotto.#numbers = lottoNumbers;
  };
}

module.exports = Lotto;
