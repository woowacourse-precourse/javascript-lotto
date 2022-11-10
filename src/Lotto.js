const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  alertHowManyBought(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }

  alertNumberOfPurchases(pickedNumbers) {
    Console.print(pickedNumbers.join("\n"));
  }

  alertPurchaseResult(count, pickedNumbers) {
    this.alertHowManyBought(count);
    this.alertNumberOfPurchases(pickedNumbers);
  }
}

module.exports = Lotto;
