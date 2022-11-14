const { pickUniqueNumbersInRange } = require("../utils/Missionutils");

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
      pickedNumber = pickUniqueNumbersInRange(1, 45, 6);
      this.#addValidNumberIntoSet(pickedNumber);
    }
  }

  #addValidNumberIntoSet(pickedNumber) {
    if (this.isLottoSetValid(pickedNumber))
      this.#selectedLottoNumberSet.add(this.#makeArrayAscendingOrder(pickedNumber));
  }

  #makeArrayAscendingOrder(array) {
    return array.sort((a, b) => a - b);
  }

  #getNumberOfLottos(money) {
    this.#countOfLottos = money / 1000;
  }

  isInputNumbersValid(numbers) {
    if (this.#isInputless(numbers)) throw Error("[ERROR] 입력이 없습니다.");
    if (this.#isNegativeNumber(numbers)) throw Error("[ERROR] 양수만 입력해주세요.");
    if (this.#isNotConsistOnlyNumber(numbers)) throw Error("[ERROR] 숫자만 입력 가능합니다.");
    if (this.#isNotDividedThousand(numbers)) throw Error("[ERROR] 천원 단위 입력을 해주세요.");
  }

  isLottoSetValid(lottoList) {
    if (this.#hasDuplicatedValue(lottoList)) return false;
    return true;
  }

  #hasDuplicatedValue(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  #isNotDividedThousand(input) {
    return input === "0" || input % 1000 !== 0;
  }

  #isInputless(input) {
    return !input;
  }

  #isNotConsistOnlyNumber(input) {
    return /[^0-9]/g.test(input);
  }

  #isNegativeNumber(input) {
    return +input < 0;
  }
}
module.exports = MyNumberGenerator;
