const MissionUtils = require('@woowacourse/mission-utils');
const { PROFIT, PRICE_PER_LOTTO } = require('./constants');

class Result {
  #hitList = {
    three: 0,
    four: 0,
    five: 0,
    fiveAndBonus: 0,
    six: 0,
  };

  constructor(randomNumUnits, lottoNums, bonusNum) {
    this.randomNumUnits = randomNumUnits;
    this.lottoNums = lottoNums;
    this.bonusNum = bonusNum;
    this.make();
  }

  make() {
    this.correctNums = this.makeCorrectNums();
    this.setHitList(this.correctNums);
    this.setProfit();
    this.printResult();
  }

  makeCorrectNums() {
    const resultArr = [];
    this.randomNumUnits.map((randomNums) => {
      resultArr.push(this.checkCorrectNum(randomNums));
    });
    return resultArr;
  }

  checkCorrectNum(randomNums) {
    const correctNum = randomNums.filter((num) => {
      return this.lottoNums.includes(num);
    });
    this.checkBonusNum(correctNum, randomNums);
    return correctNum;
  }

  checkBonusNum(correctNum, randomNums) {
    if (randomNums.includes(this.bonusNum)) {
      correctNum.push(this.bonusNum);
    }
  }

  setHitList(correctNums) {
    correctNums.forEach((numbers) => {
      this.addList(numbers);
    });
  }

  addList(numbers) {
    switch (numbers.length) {
      case 3:
        this.#hitList.three++;
        break;
      case 4:
        this.#hitList.four++;
        break;
      case 5:
        this.#hitList.five++;
        break;
      case 6:
        this.checkWithBonus(numbers);
        break;
    }
  }

  checkWithBonus(numbers) {
    if (numbers.includes(this.bonusNum)) {
      this.#hitList.fiveAndBonus++;
      return;
    }
    this.#hitList.six++;
  }

  setProfit() {
    const money = PRICE_PER_LOTTO * this.randomNumUnits.length;
    const totalGain = this.getTotalGain();
    this.profit = ((totalGain / money) * 100).toFixed(1);
    if (isNaN(this.profit)) this.profit = '0.0';
  }

  getTotalGain() {
    var total = 0;
    total += this.#hitList.three * PROFIT.THREE;
    total += this.#hitList.four * PROFIT.FOUR;
    total += this.#hitList.five * PROFIT.FIVE;
    total += this.#hitList.fiveAndBonus * PROFIT.FIVE_AND_BONUS;
    total += this.#hitList.six * PROFIT.SIX;
    return total;
  }

  printResult() {
    MissionUtils.Console.print('');
    MissionUtils.Console.print(`당첨 통계`);
    MissionUtils.Console.print(`---`);
    this.printList();
    MissionUtils.Console.print(`총 수익률은 ${this.profit}%입니다.`);
  }

  printList() {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.#hitList.three}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.#hitList.four}개`);
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.#hitList.five}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${
        this.#hitList.fiveAndBonus
      }개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.#hitList.six}개`
    );
  }
}

module.exports = Result;
