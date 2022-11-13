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
    this.yield = (this.rewardMoney / this.usersMoney).toFixed(1);
  }

  printResult() {
    MissionUtils.Console.print("\n당첨 통계\n---")
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.checkRank[5]}개`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.checkRank[4]}개`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.checkRank[3]}개`)
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.checkRank[2]}개`)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.checkRank[1]}개`)
    MissionUtils.Console.print(`총 수익률은 ${this.yield}%입니다.`)

    MissionUtils.Console.close();
  }
  
}

module.exports = LottoCalculator;
