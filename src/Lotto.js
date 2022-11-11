const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  inputPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.", (purchaseAmount) => {
      is1000Multiple(purchaseAmount);
    });
  }

  is1000Multiple(purchaseAmount) {
    if(purchaseAmount % 1000 !== 0){
      throw new Error("[ERROR] 로또 구입 금액은 1000의 배수여야 합니다.")
    }
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

module.exports = Lotto;
