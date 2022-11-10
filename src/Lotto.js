const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const LENGTH = numbers.length;
    if (LENGTH !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다!");
    }
    for (let i = 0; i < LENGTH; i++) {
      if (isNaN(numbers[i])) {
        throw new Error("[ERROR] 숫자가 아닙니다!");
      }
      if (numbers[i] <= 0 || numbers[i] > 45) {
        throw new Error("[ERROR] 1 ~ 45 숫자가 아닙니다!");
      }
    }
  }

  inputBonusNumbers() {
    const WORD_TO_PRINT = "보너스 번호를 입력해 주세요.\n";
    let bonusNumber;
    MissionUtils.Console.readLine(WORD_TO_PRINT, (number) => {
      bonusNumber = Number(number);
      this.validateBonusNumber(bonusNumber);
    });
  }

  validateBonusNumber(bonusNumber) {
    for (let i = 0; i < this.#numbers.length; i++) {
      if (this.#numbers[i] === bonusNumber) {
        throw new Error("[ERROR] 로또 번호와 중복된 숫자입니다!");
      }

      if (bonusNumber <= 0 || bonusNumber > 45) {
        throw new Error("[ERROR] 1 ~ 45 숫자가 아닙니다!");
      }

      if (isNaN(bonusNumber)) {
        throw new Error("[ERROR] 숫자가 아닙니다!");
      }
    }
  }
  // TO DO -
  // 일치 개수 비교 및 통계.
}

module.exports = Lotto;
