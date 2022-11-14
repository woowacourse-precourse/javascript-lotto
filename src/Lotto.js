const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.checkWinNumber(numbers);
    this.#numbers = numbers;
  }

  checkWinNumber(winNumberArr) {
    MissionUtils.Console.print(new Set(winNumberArr).size);
    if (new Set(winNumberArr).size != 6)
      throw new Error("[ERROR]로또 번호 입력 오류1");
    winNumberArr.forEach((number) => {
      if (!Number(number)) throw new Error("[ERROR]로또 번호 입력 오류2");
      if (number > 45 || number < 1)
        throw new Error("[ERROR]로또 번호 입력 오류3");
    });
  }
}

// TODO: 추가 기능 구현
module.exports = Lotto;
