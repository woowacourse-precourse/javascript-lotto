class Bonus {
  #bonus;

  constructor(bonus) {
    this.validate(bonus);
    this.#bonus = bonus;
  }

  validate(bonus) {
    this.checkNumberAndInrange(bonus);
  }

  checkNumberAndInrange(bonus) {
    const START_LOTTO_NUMBER = 1;
    const END_LOTTO_NUMBER = 45;

    if (
      !(parseInt(bonus) >= START_LOTTO_NUMBER) ||
      !(parseInt(bonus) <= END_LOTTO_NUMBER)
    ) {
      throw new Error(
        `[ERROR] 보너스 번호는 ${START_LOTTO_NUMBER}부터 ${END_LOTTO_NUMBER}까지의 숫자여야 합니다.`
      );
    }
  }
}

module.exports = Bonus;
