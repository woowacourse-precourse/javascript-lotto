const { Console, Random } = require("@woowacourse/mission-utils");
const {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  UNIT,
  RESULT_MEESAGE,
} = require("./constant/constant");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.result = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
  }

  play() {
    this.getMoney();
  }

  getMoney() {
    Console.readLine(INPUT_MESSAGE.MONEY, (money) => {
      this.validateMoney(money);
      this.lottos = this.exchangeLotto(+money / UNIT.MONEY);
      this.printLottos(this.lottos);
      this.getWinningNumbers();
    });
  }

  validateMoney(money) {
    if (+money % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.WRONG_MONEY);
    }
  }

  exchangeLotto(quantity) {
    const lottos = [];
    for (let i = 0; i < quantity; i++) {
      lottos.push(new Lotto(this.generateRandomNumbers()));
    }
    return lottos;
  }

  generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printLottos(lottos) {
    const numbers = lottos.map((lotto) => `[${lotto.numbers}]`);
    Console.print(RESULT_MEESAGE.PURCHASE.replace("N", numbers.length));
    Console.print(numbers.join("\n"));
  }

  getWinningNumbers() {
    Console.readLine(INPUT_MESSAGE.WINNING_NUMBER, (numbers) => {
      this.winningNumber = numbers.split(",").map((number) => +number);
      this.validateWinningNumbers(this.winningNumber);
      this.getBonusNumber();
    });
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.WRONG_QUANTITY);
    }

    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.HAS_REPEAT);
    }
  }

  getBonusNumber() {
    Console.readLine(INPUT_MESSAGE.BONUS_NUMBER, (number) => {
      this.validateBonusNumber(number);
      this.bonusNumber = number;
      this.compare(this.lottos, this.winningNumber, this.bonusNumber);
    });
  }

  validateBonusNumber(number) {
    if (number < 1 || number > 45) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }

    if (this.winningNumber.includes(number)) {
      throw new Error(ERROR_MESSAGE.HAS_REPEAT);
    }
  }

  compare(lottos, winningNumber, bonusNumber) {
    for (const lotto of lottos) {
      const match = lotto.compare(winningNumber, bonusNumber);
      this.result[match] += 1;
    }
    this.printResult();
  }

  printResult() {
    Console.print(RESULT_MEESAGE.LOTTERY_RESULT);
    Console.print(
      `3개 일치 (5,000원) - ${this.result[3]}개
4개 일치 (50,000원) - ${this.result[4]}개
5개 일치 (1,500,000원) - ${this.result[5]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result[5.5]}개
6개 일치 (2,000,000,000원) - ${this.result[6]}개`
    );
  }
}

new App().play();
module.exports = App;
