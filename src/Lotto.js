const { Console, Random } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  // constructor(numbers) {
  //   this.validate(numbers);
  //   this.#numbers = numbers;
  // }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  //   }
  // }

  // TODO: 추가 기능 구현

  checkPurchaseAmount(cost) {
    if (cost === '0') {
      throw new Error('[ERROR] 로또는 1장 이상 구매 가능합니다.');
    }
    if (cost % 1000 !== 0) {
      throw new Error('[ERROR] 1,000원 단위로만 입력 가능합니다.');
    }
    if (cost < 0) {
      throw new Error('[ERROR] 1,000원 이상의 올바른 금액을 입력해주세요.');
    }
  }

  getPurchaseAmount() {
    Console.readLine(`구입금액을 입력해 주세요.${'\n'}`, (cost) => {
      this.checkPurchaseAmount(cost);
    });
  }

  getRandomNumbers(quantity) {
    const result = [];
    for (let i = 0; i < quantity; i += 1) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      result.push(randomNumbers);
    }
    return result;
  }
}

const test = new Lotto();
console.log(test.getRandomNumbers());

module.exports = Lotto;
