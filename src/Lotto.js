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
    this.publishLotto();
  }

  inputMoney() {
    Console.readLine(`${Constant.INPUT_MESSAGE.money}\n`, (answer) => {
      if (answer % 1000 !== 0) throw new Error(Constant.ERROR_MESSAGE.moneyUnit);
      this.money = answer;
    });
  }

  calcLottoCount() {
    return this.money / 1000;
  }

  publishLotto() {
    Console.print(`${Constant.OUTPUT_MESSAGE.lottoCount(this.calcLottoCount())}`);
    for (let i = 0; i < this.lottoCount; i++) {
      const lotto = this.getRandomNumbers;
      Console.print(lotto);
      this.lottos.push(lotto);
    }
  }

  getRandomNumbers() {
    const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    lotto.sort();
    return lotto;
  }
}

module.exports = Lotto;
