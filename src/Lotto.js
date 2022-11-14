const { Console, Random } = MissionUtils;
const isAllDifferent = require("../src/utils/isAllDifferent.js");
const isOneToFF = require("../src/utils/isOnetoFF.js");
const isNumber = require("../src/utils/isNumber.js");
class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  printInputNumbers() {
    Console.print("당첨 번호를 입력해 주세요.");
  }
  printBonusNumbers() {
    Console.print("보너스 번호를 입력해 주세요.");
  }
  inputNumbers() {
    Console.readLine((input) => {
      const realInput = input.split(",").join("");
      this.validate(realInput);
      if (
        !isAllDifferent(realInput) ||
        !isOneToFF(realInput) ||
        isNumber(realInput)
      )
        throw new Error("[ERROR] 잘못된 수를 입력하였습니다.");
      this.#numbers = [...realInput];
      this.printBonusNumbers();
      this.inputBonusNumber();
    });
  }
  inputBonusNumber() {
    Console.readLine((input) => {
      if (!isNumber(input) || !isOneToFF(input))
        throw new Error("[ERROR] 잘못된 수를 입력하였습니다.");
      this.#numbers.push(input);
    });
  }
}

module.exports = Lotto;
