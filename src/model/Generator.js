const { pickUniqueNumbersInRange } = require("../utils/Missionutils");
const { MESSAGE_ACCORDING_ERROR } = require("../constants/message");
const { LOTTO_INFO, MATH_INFO } = require("../constants/value");

class MyNumberGenerator {
  #countOfLottos;
  #selectedLottoNumberSet = new Set();

  generateMyLottoNumber(moneyInput) {
    this.isInputNumbersValid(moneyInput);
    this.#getNumberOfLottos(+moneyInput);
    this.#setMyLottoNumbers();
    return this.#selectedLottoNumberSet;
  }

  #setMyLottoNumbers() {
    let pickedNumber;
    while (this.#selectedLottoNumberSet.size < this.#countOfLottos) {
      pickedNumber = pickUniqueNumbersInRange(
        LOTTO_INFO.MIN_VALUE,
        LOTTO_INFO.MAX_VALUE,
        LOTTO_INFO.WINNING_LOTTO_LENGTH
      );
      this.#addValidNumberIntoSet(pickedNumber);
    }
  }

  #addValidNumberIntoSet(pickedNumber) {
    if (this.#isLottoSetValid(pickedNumber))
      this.#selectedLottoNumberSet.add(this.#makeArrayAscendingOrder(pickedNumber));
  }

  #makeArrayAscendingOrder(array) {
    return array.sort((a, b) => a - b);
  }

  #getNumberOfLottos(money) {
    this.#countOfLottos = money / LOTTO_INFO.LEAST_LOTTO_PURCHASED_PRICE;
  }

  isInputNumbersValid(numbers) {
    if (this.#isInputless(numbers)) throw Error(MESSAGE_ACCORDING_ERROR.NOT_INPUTTED);
    if (this.#isNegativeNumber(numbers)) throw Error(MESSAGE_ACCORDING_ERROR.NOT_POSITIVE_NUMBER);
    if (this.#isNotConsistOnlyNumber(numbers)) throw Error(MESSAGE_ACCORDING_ERROR.TYPE);
    if (this.#isNotDividedThousand(numbers)) throw Error(MESSAGE_ACCORDING_ERROR.NOT_THOUSAND_UNIT);
  }

  #isLottoSetValid(lottoList) {
    if (this.#hasDuplicatedValue(lottoList)) return false;
    return true;
  }

  #hasDuplicatedValue(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  #isNotDividedThousand(input) {
    return (
      input === MATH_INFO.STRING_ZERO ||
      input % LOTTO_INFO.LEAST_LOTTO_PURCHASED_PRICE !== MATH_INFO.INT_ZERO
    );
  }

  #isInputless(input) {
    return !input;
  }

  #isNotConsistOnlyNumber(input) {
    return /[^0-9]/g.test(input);
  }

  #isNegativeNumber(input) {
    return +input < MATH_INFO.INT_ZERO;
  }
}
module.exports = MyNumberGenerator;
