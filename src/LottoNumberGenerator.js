const { readLine } = require("./Missionutils");

class LottoNumberGenerator {
  #inputNumber;
  inputNumberFromUser() {
    readLine("구입 금액을 입력해주세요.", (input) => {
      this.#inputNumber = input;
      this.isInputNumbersValid(this.#inputNumber);
    });
  }

  isInputNumbersValid(numbers) {
    if (this.#isInputless(numbers)) throw Error("[ERROR] 입력이 없습니다.");
    if (this.#isNegativeNumber(numbers)) throw Error("[ERROR] 양수만 입력해주세요.");
    if (this.#isNotConsistOnlyNumber(numbers)) throw Error("[ERROR] 숫자만 입력 가능합니다.");
    if (this.#isNotDividedThousand(numbers)) throw Error("[ERROR] 천원 단위 입력을 해주세요.");
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
