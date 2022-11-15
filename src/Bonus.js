class Bonus {
  #bonus;

  constructor(bonus) {
    this.validate(bonus);
    this.#bonus = bonus;
  }

  validate(bonus) {
    // 숫자가 아닌 경우 에러 처리
    if (isNaN(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 숫자만 입력되어야 합니다.");
    }
    // 숫자가 범위를 벗어난 경우 에러 처리

    if (bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45까지의 숫자입니다.");
    }
  }
}

module.exports = Bonus;
