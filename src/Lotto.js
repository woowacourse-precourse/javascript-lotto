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

  printNumberOfLottos(inputMoney) {
    const numberOfLotto = Math.floor(inputMoney / 1000);
    Console.print('\n' + numberOfLotto + '개를 구매했습니다.');
    this.printLottos(numberOfLotto);
  }

  printLottos(numberOfLotto) {
    const lottoArrays = [];
    for (let i = 0; i < numberOfLotto; i++) {
      this.#numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      console.log(this.#numbers);
      this.validate(this.#numbers);
      console.log(this.#numbers);
      lottoArrays.push(this.#numbers);
    }
    lottoArrays.forEach((numbers) => {
      return Console.print(numbers);
      } 
    )
  }
}

module.exports = Lotto;
