class Bonus {
  #bonus;

  constructor(bonus) {
    this.bonusValidate(bonus);
    this.isBonusRange(bonus);
    this.#bonus = bonus;
  }

  bonusValidate(bonus) {
    if (!Number(bonus)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  }

  isBonusRange(bonuses) {
    for (let bonus of bonuses) {
      if (bonus < 1 || bonus > 45) throw new Error("[ERROR] 로또 번호는 1 이상 45 이하의 정수여야 합니다.");
    }
  }
}
module.exports = Bonus;
