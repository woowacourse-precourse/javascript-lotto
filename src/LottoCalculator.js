const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const LottoMachine = require("./LottoMachine");
const { RESULT_MESSAGE } = require("./constants/MessageConstants");


class LottoCalculator {
  winningNumbers;
  bonusNumber;
  usersLottos;
  usersMoney;
  usersTotalRank = [];
  rankReward = [0, 2000000000, 30000000, 1500000, 50000, 5000];
  checkRank = [0, 0, 0, 0, 0, 0];
  rewardMoney = 0;
  yield;

  constructor(usersLottos) {
    this.usersLottos = usersLottos;
    this.usersMoney = this.usersLottos.length * 1000;
  }

  calculate() {
    this.usersLottos.forEach((usersLotto) => {
      const rank = this.compareNumber(usersLotto);
      this.usersTotalRank.push(rank);
    });

    this.calculateResult();
    this.printResult();
  }

  compareNumber(usersLotto) {
    let count = 0;
    
    usersLotto.forEach((number) => {
      if (this.winningNumbers.includes(number)) {
        count += 1;
      }
    });
    
    switch(count) {
      case 6: return 1;
      case 5:
        if (usersLotto.includes(this.bonusNumber)) {
          return 2;
        }
        return 3;
      case 4: return 4;
      case 3: return 5;
    } return 0;
  }

  calculateResult() {
    this.usersTotalRank.forEach((rank) => {
      this.rewardMoney += this.rankReward[rank];
      this.checkRank[rank] += 1;
    });    
    this.yield = ((this.rewardMoney / this.usersMoney) * 100).toFixed(1);
  }

  printResult() {
    MissionUtils.Console.print(RESULT_MESSAGE.OPENING_MESSAGE);
    MissionUtils.Console.print(RESULT_MESSAGE.FIFTH_PLACE + `${this.checkRank[5]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.FOURTH_PLACE + `${this.checkRank[4]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.THIRD_PLACE + `${this.checkRank[3]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.SECOND_PLACE + `${this.checkRank[2]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.FIRST_PLACE + `${this.checkRank[1]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.YIELD_FRONT_MESSAGEL + `${this.yield}` + RESULT_MESSAGE.YIELD_BACK_MESSAGEL);

    MissionUtils.Console.close();
  }
  
}

module.exports = LottoCalculator;
