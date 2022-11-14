const MissionUtils = require("@woowacourse/mission-utils");
const Constant = require("./Constant");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.money;
    this.lottos = [];
    this.userNumbers;
    this.bonusNum;
  }

  validate(numbers) {
    if (Array.isArray(numbers)) {
      if (numbers.length !== 6) {
        throw new Error(Constant.ERROR_MESSAGE.numberLength);
      }
      if (new Set(numbers).size !== 6) {
        throw new Error(Constant.ERROR_MESSAGE.uniqueNumber);
      }
    }
  }

  process() {
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine(`${Constant.INPUT_MESSAGE.money}\n`, (answer) => {
      if (answer % 1000 !== 0) throw new Error(Constant.ERROR_MESSAGE.moneyUnit);
      this.money = answer;
      this.publishLotto();
    });
  }

  calcLottoCount() {
    return this.money / 1000;
  }

  publishLotto() {
    MissionUtils.Console.print(`${Constant.OUTPUT_MESSAGE.lottoCount(this.calcLottoCount())}`);
    for (let i = 0; i < this.calcLottoCount(); i++) {
      const lotto = this.getRandomNumbers();
      Console.print(lotto);
      this.lottos.push(lotto);
    }
    this.getUserNumbers();
  }

  getRandomNumbers() {
    const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    const result = lotto.sort((a, b) => a - b);
    return result;
  }

  getUserNumbers() {
    Console.readLine(`${Constant.INPUT_MESSAGE.userNumbers}\n`, (answer) => {
      this.userNumbers = answer.split(",");
      if (this.userNumbers.length !== 6) {
        throw new Error(Constant.ERROR_MESSAGE.numberLength);
      }
      if (new Set(this.userNumbers).size !== 6) {
        throw new Error(Constant.ERROR_MESSAGE.uniqueNumber);
      }

      this.getUserBonusNumber();
    });
  }

  getUserBonusNumber() {
    Console.readLine(`${Constant.INPUT_MESSAGE.bonusNumber}\n`, (answer) => {
      this.bonusNum = answer;
      if (this.userNumbers.includes(this.bonusNum)) {
        throw new Error(Constant.ERROR_MESSAGE.uniqueNumber);
      }
    });
  }
}

module.exports = Lotto;
