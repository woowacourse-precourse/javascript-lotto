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
    if (this.#isNotDividedThousand(numbers))
      throw Error("[ERROR] 천원 단위 입력을 해주세요.");
  }

  #isNotDividedThousand(numbers) {
    return numbers === "0" || numbers % 1000 !== 0;
  }
}
