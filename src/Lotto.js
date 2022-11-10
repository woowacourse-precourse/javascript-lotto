const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers, BONUS_NUMBER, MONEY) {
    this.validate(numbers);
    this.errorHandler(BONUS_NUMBER, MONEY);

    this.#numbers = numbers;
    this.BONUS_NUMBER = BONUS_NUMBER;
    this.MONEY = MONEY;
  }

  validate(numbers) {
    const lottoSet = new Set(numbers);
    if (lottoSet.size != numbers.length) {
      throw new Error("[ERROR] 중복된 숫자를 입력할 수 없습니다.");
    }

    if (lottoSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    for (let item of lottoSet.values()) {
      if (item < 1 | item > 45) {
        throw new Error("[ERROR] 1 ~ 45까지의 숫자만 입력할 수 있습니다.")
      }
    }
  }
  
  errorHandler(BONUS_NUMBER, MONEY) {
    if (BONUS_NUMBER < 1 | BONUS_NUMBER > 45) {
      throw new Error("[ERROR] 1 ~ 45까지의 숫자만 입력할 수 있습니다.");
    }

    if (MONEY%1000 != 0) {
      throw new Error("[ERROR] 복권의 1장당 가격은 1000원입니다.");
    }

    if (this.#numbers.includes(BONUS_NUMBER)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }
}

module.exports = Lotto;
