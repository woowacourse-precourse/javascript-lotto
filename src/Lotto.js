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
    }
    winNumberArr.forEach((number) => {
      if (!isNaN(number)) throw new Error("[ERROR] 숫자만 입력하세요.");
      if (number > 45 || number < 1)
        throw new Error("[ERROR]  숫자 범위는 1~45까지입니다.");
    });
  }
}

// TODO: 추가 기능 구현
module.exports = Lotto;
