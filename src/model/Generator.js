const { pickUniqueNumbersInRange } = require("../utils/MissionUtils");
const { Validator } = require("../utils/Validator");
const { LOTTO_INFO } = require("../constants/Value");

class MyNumberGenerator {
  #countOfLottos;
  #selectedLottoNumberSet = [];

  generateMyLottoNumber(moneyInput) {
    Validator.isInputMoneyValid(moneyInput);
    this.#getNumberOfLottos(+moneyInput);
    this.#setMyLottoNumbers();
    return this.#selectedLottoNumberSet;
  }

  #setMyLottoNumbers() {
    let pickedNumber;
    while (this.#selectedLottoNumberSet.length < this.#countOfLottos) {
      pickedNumber = pickUniqueNumbersInRange(
        LOTTO_INFO.MIN_VALUE,
        LOTTO_INFO.MAX_VALUE,
        LOTTO_INFO.WINNING_LOTTO_LENGTH
      );
      this.#addValidNumberIntoSet(pickedNumber);
    }
  }

  #addValidNumberIntoSet(pickedNumber) {
    if (Validator.isLottoSetValid(pickedNumber))
      this.#selectedLottoNumberSet.push(
        this.#makeArrayAscendingOrder(pickedNumber)
      );
  }

  #makeArrayAscendingOrder(array) {
    return array.sort((a, b) => a - b);
  }

  #getNumberOfLottos(money) {
    this.#countOfLottos = money / LOTTO_INFO.LEAST_LOTTO_PURCHASED_PRICE;
  }
}
module.exports = MyNumberGenerator;
