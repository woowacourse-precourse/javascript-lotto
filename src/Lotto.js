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
    this.userNumbers = [];
    this.bonusNum;
    this.winPoint = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      rateOfReturn: 0,
    };
  }

  validate(numbers) {
    const outOfRange = (num) => {
      if (num > 45 || num < 1) return true;
    };
    if (Array.isArray(numbers)) {
      if (numbers.length !== 6) {
        throw new Error(Constant.ERROR_MESSAGE.numberLength);
      }
      if (new Set(numbers).size !== 6) {
        throw new Error(Constant.ERROR_MESSAGE.uniqueNumber);
      }
      if (numbers.some(outOfRange)) {
        throw new Error(Constant.ERROR_MESSAGE.outOfRange);
      }
    } else {
      if (this.userNumbers?.includes(this.bonusNum)) {
        throw new Error(Constant.ERROR_MESSAGE.uniqueNumber);
      }
      if (this.bonusNum > 45 || this.bonusNum < 1) {
        throw new Error(Constant.ERROR_MESSAGE.outOfRange);
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
      Console.print(`[${lotto.join(", ")}]`);
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
      this.validate(answer);
      this.userNumbers = answer.split(",");
      this.getUserBonusNumber();
    });
  }

  getUserBonusNumber() {
    Console.readLine(`${Constant.INPUT_MESSAGE.bonusNumber}\n`, (answer) => {
      this.bonusNum = answer;
      this.validate(this.bonusNum);
      this.winLottoCount();
    });
  }

  winLottoCount() {
    for (let i = 0; i < this.lottos.length; i++) {
      const matchCount = this.userNumbers.filter((numb) => this.lottos[i].includes(parseInt(numb)));

      if (matchCount.length >= 3) {
        this.calcWinPoint(matchCount.length, i);
      }
    }
    this.lottoResult();
  }

  calcWinPoint(matchCount, i) {
    switch (matchCount) {
      case 3:
        this.winPoint.fifth++;
        break;
      case 4:
        this.winPoint.fourth++;
        break;
      case 5:
        if (this.lottos[i].includes(this.bonusNum)) {
          this.winPoint.second++;
        } else {
          this.winPoint.third++;
        }
        break;
      case 6:
        this.winPoint.first++;
    }
  }

  lottoResult() {
    this.calcRateOfReturn();
    Console.print(`${Constant.OUTPUT_MESSAGE.result}`);
    Console.print(`${Constant.OUTPUT_MESSAGE.threeMatch(this.winPoint.fifth)}`);
    Console.print(`${Constant.OUTPUT_MESSAGE.fourMatch(this.winPoint.fourth)}`);
    Console.print(`${Constant.OUTPUT_MESSAGE.fiveMatch(this.winPoint.third)}`);
    Console.print(`${Constant.OUTPUT_MESSAGE.fiveBonusMatch(this.winPoint.second)}`);
    Console.print(`${Constant.OUTPUT_MESSAGE.sixMatch(this.winPoint.first)}`);
    Console.print(`${Constant.OUTPUT_MESSAGE.rateOfReturn(this.winPoint.rateOfReturn)}`);
    Console.close();
  }

  calcRateOfReturn() {
    const rateOfReturn =
      this.winPoint.first * Constant.REWADR.first +
      this.winPoint.second * Constant.REWADR.second +
      this.winPoint.third * Constant.REWADR.third +
      this.winPoint.fourth * Constant.REWADR.fourth +
      this.winPoint.fifth * Constant.REWADR.fifth;

    const result = ((rateOfReturn / this.money) * 100).toFixed(1);
    this.winPoint.rateOfReturn = result;
  }
}

module.exports = Lotto;
