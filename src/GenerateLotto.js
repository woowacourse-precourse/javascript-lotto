const { Random } = require("@woowacourse/mission-utils");
const LOTTO_PRICE = 1000;

class GenerateLotto {
  #money;
  #lotto;
  constructor(money) {
    this.#money = money;
    this.#lotto = [];
    this.validate(money);
  }

  validate(money) {
    const regex = /^[0-9]+$/;
    if (!regex.test(money)) {
      throw new Error('[ERROR] 숫자만 입력해주세요.');
    }
  }

  purchaseCount() {
    this.count = this.#money / LOTTO_PRICE;
    return this.count;
  }

  setLottoNumber() {
    for (let count = 0; count < this.count; count++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lotto.push(numbers);
      this.#lotto[count].sort((a, b) => a - b);
    }
    return this.#lotto;
  }
}

module.exports = GenerateLotto;