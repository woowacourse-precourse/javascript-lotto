const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    this.bonusNumber = null;
    this.validate(numbers);
    this.isCorrectNumber(numbers);
    this.setWonLotto(numbers);
    this.inputBonusNumber();
    this.validateInitialBonusInput(this.bonusNumber);
    this.setBonus(this.bonusNumber);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  isCorrectNumber(numbers) {
    let bit = 0;
    for (let index = 0; index < 6; index++) {
      if (numbers[index] % 1 > 0) {
        throw new Error("[ERROR] 로또 번호는 자연수만 입력할 수 있습니다.");
      }
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
    MissionUtils.Console.print("\n");
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (bonusNumber) => {
        this.bonusNumber = bonusNumber;
      }
    );
  }

  validateInitialBonusInput(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자이어야합니다.");
    }
    this.bonusNumber = this.validateBonusNumber(this.bonusNumber);
  }

  validateBonusNumber(number) {
    if (this.#numbers.includes(number)) {
      throw new Error(
        "[ERROR] 보너스 번호는 당첨 번호와 중복되어서는 안됩니다."
      );
    }
    const bonusNumber = parseInt(number);
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1~45까지만 입력할 수 있습니다.");
    }
    if (bonusNumber % 1 > 0) {
      throw new Error("[ERROR] 보너스 번호는 자연수 이어야합니다.");
    }
    return bonusNumber;
  }

  setBonus(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  setWonLotto(numbers) {
    this.#numbers = numbers;
  }

  getBonus() {
    return this.#bonusNumber;
  }

  getWonLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
