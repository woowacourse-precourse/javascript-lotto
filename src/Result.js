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
}

module.exports = Result;
