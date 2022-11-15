class Cost {
  #cost;

  constructor(cost) {
    this.validate(cost);
    this.#cost = cost;
  }

  validate(cost) {
    if (isNaN(Number(cost))) {
      throw new Error('[ERROR] 구입 금액은 숫자로 입력해야 합니다.');
    }

    if (cost % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000원으로 나누어떨어져야합니다.');
    }
  }

  getValue() {
    return this.#cost;
  }
}

module.exports = Cost;
