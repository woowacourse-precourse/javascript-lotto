const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor() {
    this.setWinningNumbers();
  }

  setWinningNumbers() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      const numbers = answer.split(",").map((item) => Number(item));
      this.validateWinningNumbers(numbers);
      this.#numbers = numbers;
    });
  }

  getWinningNumbers() {
    return this.#numbers;
  }

  setBonusNumber() {
    let bonusNumber = 0;
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (answer) => {
        this.validateNumberRange(Number(answer));
        bonusNumber = Number(answer);
      }
    );

    return bonusNumber;
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    for (let num of numbers) {
      this.validateNumberRange(num);
    }
  }

  validateNumberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
}

module.exports = Lotto;
