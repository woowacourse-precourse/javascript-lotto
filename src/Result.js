const MissionUtils = require('@woowacourse/mission-utils');
const { PROFIT, PRICE_PER_LOTTO } = require('./constants');

class Result {
  constructor(randomNumUnits, lottoNums, bonusNum) {
    this.randomNumUnits = randomNumUnits;
    this.lottoNums = lottoNums;
    this.bonusNum = bonusNum;
    this.hitNumList = {
      three: 0,
      four: 0,
      five: 0,
      fiveAndBonus: 0,
      six: 0,
    };
  }

  getResult() {
    this.correctNums = this.makeCorrectNums();
    this.setHitList();
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

  setHitList() {
    this.correctNums.forEach((numbers) => {
      this.addList(numbers);
    });
  }

  addList(numbers) {
    switch (numbers.length) {
      case 3:
        this.hitNumList.three++;
        break;
      case 4:
        this.hitNumList.four++;
        break;
      case 5:
        this.hitNumList.five++;
        break;
      case 6:
        this.checkWithBonus(numbers);
        break;
    }
  }

  checkWithBonus(numbers) {
    if (numbers.includes(this.bonusNum)) {
      this.hitNumList.fiveAndBonus++;
      return;
    }
    this.hitNumList.six++;
  }
  setProfit() {
    const money = PRICE_PER_LOTTO * this.randomNumUnits.length;
    const totalGain = this.getTotalGain();
    this.profit = ((totalGain / money) * 100).toFixed(1);
    if (isNaN(this.profit)) this.profit = '0.0';
  }

  getTotalGain() {
    var total = 0;
    total += this.hitNumList.three * PROFIT.THREE;
    total += this.hitNumList.four * PROFIT.FOUR;
    total += this.hitNumList.five * PROFIT.FIVE;
    total += this.hitNumList.fiveAndBonus * PROFIT.FIVE_AND_BONUS;
    total += this.hitNumList.six * PROFIT.SIX;
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
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${this.hitNumList.three}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${this.hitNumList.four}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.hitNumList.five}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.hitNumList.fiveAndBonus}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.hitNumList.six}개`
    );
  }
}

module.exports = Result;
