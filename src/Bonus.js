class Bonus {
  #bonus;

  constructor(bonus, winningNumbers) {
    this.validate(bonus, winningNumbers);
    this.#bonus = bonus;
  }

  validate(bonus, winningNumbers) {
    // 숫자가 아닌 경우 에러 처리
    if (isNaN(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 숫자만 입력되어야 합니다.");
    }
    // 숫자가 범위를 벗어난 경우 에러 처리

    if (bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45까지의 숫자입니다.");
    }
    // 보너스 번호가 당첨번호에 포함될 경우 예외 처리
    if (winningNumbers.includes(parseInt(bonus))) {
      throw new Error("[ERROR] 보너스 번호는 당첨 숫자에 포함되면 안됩니다.");
    }
  }
}
module.exports = Bonus;
