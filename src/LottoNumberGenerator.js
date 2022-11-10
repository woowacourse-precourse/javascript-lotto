const { readLine } = require("./Missionutils");

class LottoNumberGenerator {
  #inputNumber;
  inputNumberFromUser() {
    readLine("구입 금액을 입력해주세요.", (input) => {
      this.#inputNumber = input;
      this.#isInputNumbersValid(this.#inputNumber);
    });
  }

  #isInputNumbersValid(numbers) {
    if (this.#isNotConsistOnlyNumber(numbers)) throw Error("[ERROR] 숫자만 입력 가능합니다.");
    if (this.#isNotDividedThousand(numbers)) throw Error("[ERROR] 천원 단위 입력을 해주세요.");
  }

  #isNotDividedThousand(input) {
    return input === "0" || input % 1000 !== 0;
  }

  #isNotConsistOnlyNumber(input) {
    return /[^0-9]/g.test(input);
  }
}
