const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.checkWinNumber(numbers);
    this.#numbers = numbers;
  }

  checkWinNumber(winNumberArr) {
    if (new Set(winNumberArr).size != 6)
      throw new Error("[ERROR]로또 번호 입력 오류");
    winNumberArr.forEach((number) => {
      if (!isNaN(number)) throw new Error("[ERROR]로또 번호 입력 오류");
      if (number > 45 || number < 1)
        throw new Error("[ERROR]로또 번호 입력 오류");
    });
  }
}

// TODO: 추가 기능 구현
module.exports = Lotto;
