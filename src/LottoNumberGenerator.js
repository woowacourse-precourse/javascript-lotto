const { readLine, pickUniqueNumbersInRange } = require("./Missionutils");

class LottoNumberGenerator {
  #numberOfLottos;
  #selectedLottoNumberSet = new Set();
  inputNumberFromUser() {
    readLine("구입 금액을 입력해주세요.", (input) => {
      if (this.isInputNumbersValid(input)) {
        this.#numberOfLottos = this.#getNumberOfLottos(+input);
      }

      this.#generateLotto(this.#selectedLottoNumberSet);
    });
  }

  #generateLotto(numberSet) {
    while (numberSet.size < this.#numberOfLottos) {
      const numberArray = pickUniqueNumbersInRange(1, 45, 6);

      if (this.isLottoSetValid(numberArray))
        numberSet.add(this.#makeArrayAscendingOrder(numberArray));
    }
  }

  #makeArrayAscendingOrder(array) {
    return array.sort((a, b) => a - b);
  }

  #getNumberOfLottos(money) {
    return money / 1000;
  }

  isInputNumbersValid(numbers) {
    if (this.#isInputless(numbers)) throw Error("[ERROR] 입력이 없습니다.");
    if (this.#isNegativeNumber(numbers)) throw Error("[ERROR] 양수만 입력해주세요.");
    if (this.#isNotConsistOnlyNumber(numbers)) throw Error("[ERROR] 숫자만 입력 가능합니다.");
    if (this.#isNotDividedThousand(numbers)) throw Error("[ERROR] 천원 단위 입력을 해주세요.");
    return true;
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
module.exports = LottoNumberGenerator;
