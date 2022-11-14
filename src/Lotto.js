const MissionUtils = require("@woowacourse/mission-utils");
import { User } from "./User";

class Lotto {
  #numbers;

  constructor() {
    this.setWinningNumbers();
    const bonusNumber = this.setBonusNumber();

    this.compareLottos(bonusNumber);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  setWinningNumbers() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      const numbers = answer.split(",").map((item) => Number(item));
      this.validate(numbers);
      this.#numbers = numbers;
    });
  }

  setBonusNumber() {
    let bonusNumber = 0;
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (answer) => {
        bonusNumber = Number(answer);
      }
    );

    return bonusNumber;
  }

  compareLottos(bonusNumber) {
    const user = new User();

    let winningNumbersObj = {
      winningNumbersCount: 0,
      winningBonusNumberCount: 0,
    };

    let winningResult = [];

    for (let lotto of user.lottos) {
      winningNumbersObj.winningNumbersCount = checkWinningNumber(lotto);
      if (lotto.includes(bonusNumber))
        winningNumbersObj.winningBonusNumberCount = 1;
      winningResult.push(winningNumbersObj);
    }

    return winningResult;
  }

  checkWinningNumber(lotto) {
    let count = 0;

    for (let number of this.#numbers) {
      if (lotto.includes(number)) count++;
    }

    return count;
  }
}

module.exports = Lotto;
