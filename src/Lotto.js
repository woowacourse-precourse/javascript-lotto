const MissionUtils = require("@woowacourse/mission-utils");
import {User} from "./User";

class Lotto {
  #numbers;

  constructor() {
    this.setWinningNumbers();
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  setWinningNumbers() {
    const numbers = answer.split(",");
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      this.validate(numbers)
      this.#numbers = numbers;
    })
  }
}

module.exports = Lotto;
