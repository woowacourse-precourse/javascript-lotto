const Lotto = require("./Lotto");

const MATCHES = {
  3: "3개 일치",
  4: "4개 일치",
  5: "5개 일치",
  "5+": "5개 일치, 보너스 볼 일치",
  6: "6개 일치",
};

class LottoAnswer extends Lotto {
  #bonus;
  constructor(numbers) {
    super(numbers);
    this.#bonus = null;
  }

  validateBonus(bonus) {
    if (isNaN(bonus)) throw new Error("[ERROR] 1개의 숫자를 입력하세요.");
    if (this.numbers.includes(bonus))
      throw new Error("[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력하세요.");
    if (bonus < 1 || bonus > 45)
      throw new Error("[ERROR] 1부터 45까지 숫자 중 입력하세요.");
    if (!Number.isInteger(bonus)) throw new Error("[ERROR] 정수를 입력하세요.");
  }

  set bonus(bonus) {
    this.validateBonus(bonus);
    this.#bonus = bonus;
  }

  get bonus() {
    if (this.#bonus !== null) return this.#bonus;
  }

  compare(candidate) {
    let match = candidate.filter((number) => this.numbers.includes(number)).length;
    switch (match) {
      case 3:
        return MATCHES[3];
      case 4:
        return MATCHES[4];
      case 5: {
        if (candidate.includes(this.#bonus)) return MATCHES["5+"];
        return MATCHES[5];
      }
      case 6:
        return MATCHES[6];
    }
  }
}

module.exports = { LottoAnswer, MATCHES };
