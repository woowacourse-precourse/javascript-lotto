const {LOTTO_PRICE_UNIT} = require('../src/Constant');

class Lotto {
  #numbers; // 당첨번호

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
  }

  purchaseQuantity(amount) {
    return amount/LOTTO_PRICE_UNIT
  }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;