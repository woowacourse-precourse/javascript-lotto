const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.checkWinNumber(numbers, 6);
    this.#numbers = numbers;
    this.inputBonusNumber();
  }

  checkWinNumber(winNumberArr, arrSize) {
    if (new Set(winNumberArr).size != arrSize)
      throw new Error("[ERROR]로또 번호 입력 오류");
    winNumberArr.forEach((number) => {
      if (!Number(number)) throw new Error("[ERROR]로또 번호 입력 오류");
      if (number > 45 || number < 1)
        throw new Error("[ERROR]로또 번호 입력 오류");
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (bonusNumber) => {
        this.checkWinNumber(bonusNumber.split(), 1);
      }
    );
  }
}

// TODO: 추가 기능 구현
module.exports = Lotto;
