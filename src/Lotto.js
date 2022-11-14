const { Console, Random } = require('@woowacourse/mission-utils');
const { validateMoney } = require('./InputChecker');

class Lotto {
  #numbers

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  // TypeError: Cannot read property 'length' of undefined
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getParchaseAmount(message) {
    Console.readLine(message, (inputMoney) => {
      validateMoney(inputMoney);
      this.printNumberOfLottos(inputMoney);
    })
  }

}

module.exports = Lotto;
