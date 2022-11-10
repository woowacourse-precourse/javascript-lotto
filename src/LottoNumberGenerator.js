const { readLine } = require("./Missionutils");

class LottoNumberGenerator {
  #inputNumber;
  inputNumberFromUser() {
    readLine("구입 금액을 입력해주세요.", (input) => {
      this.#inputNumber = input;
    });
  }
}
