const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.checkWinNumber(numbers);
    this.#numbers = numbers;
  }

  checkWinNumber(winNumberArr) {
    if (winNumberArr.length != 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    } else {
      MissionUtils.Console.print("통과");
    }
  }
}

// TODO: 추가 기능 구현
module.exports = Lotto;
