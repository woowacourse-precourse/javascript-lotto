const MissionUtils = require("@woowacourse/mission-utils");
const CalculateLotto = require("./CalculateLotto");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.lotto_quantity;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    
  }

  getLottoQuantity(lotto_quantity){
    this.lotto_quantity = lotto_quantity;
  }
}
module.exports = Lotto;
