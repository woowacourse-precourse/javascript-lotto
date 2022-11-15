const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    // console.log(numbers);
    // console.log(typeof numbers[0]);
    this.validate(numbers);
    this.isCorrectNumber(numbers);
    this.#numbers = numbers;
    this.inputBonusNumber();
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  isCorrectNumber(numbers) {
    let bit = 0;
    for (let index = 0; index < 6; index++) {
      if (numbers[index] < 1 || numbers[index] > 45) {
        throw new Error("[ERROR] 로또 번호는 1~45까지만 입력할 수 있습니다.");
      }
      if (bit & (1 << numbers[index])) {
        throw new Error("[ERROR] 로또 번호 6개는 중복되지 말아야합니다.");
      }
      bit |= 1 << numbers[index];
    }
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (bonusNumber) => {
        if (isNaN(bonusNumber)) {
          throw new Error("[ERROR] 보너스 번호는 숫자이어야합니다.");
        }
        const BONUS = this.validateBonusNumber(bonusNumber);
        this.#bonusNumber = BONUS;
      }
    );
  }

  validateBonusNumber(number) {
    if (number.includes(".")) {
      throw new Error("[ERROR] 보너스 번호는 자연수이어야합니다.");
    }
    const bonusNumber = parseInt(number);
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1~45까지만 입력할 수 있습니다.");
    }
    return bonusNumber;
  }
}

module.exports = Lotto;
