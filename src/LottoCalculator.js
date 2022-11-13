const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const LottoMachine = require("./LottoMachine");

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
    console.log(this.usersTotalRank);

    this.calculateResult();
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
    console.log(this.rewardMoney, this.checkRank);
    this.yield = (this.rewardMoney / this.usersMoney).toFixed(1);
    console.log(this.yield);
  }
  
}

module.exports = LottoCalculator;
