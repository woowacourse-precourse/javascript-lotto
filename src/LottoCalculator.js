const MissionUtils = require("@woowacourse/mission-utils");
const { RESULT_MESSAGE } = require("./constants/MessageConstants");
const { MONEY, REWARD_MONEY, RANK, LOTTO, CALCULATE } = require("./constants/NumberConstants");

class LottoCalculator {
  winningNumbers;
  bonusNumber;
  usersLottos;
  usersMoney;
  usersTotalRank = [];
  rankReward = [REWARD_MONEY.BANG, REWARD_MONEY.FIRST, REWARD_MONEY.SECOND, REWARD_MONEY.THIRD, REWARD_MONEY.FOURTH, REWARD_MONEY.FIFTH];
  checkRank = new Array(LOTTO.SIX_NUMBERS).fill(0);
  rewardMoney = MONEY.ZERO;
  yield;

  constructor(usersLottos) {
    this.usersLottos = usersLottos;
    this.usersMoney = this.usersLottos.length * MONEY.IN_THOUSAND;
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
      case LOTTO.SIX_MATCHES: return RANK.FIRST_PLACE;
      case LOTTO.FIVE_MATCHES:
        if (usersLotto.includes(this.bonusNumber)) {
          return RANK.SECOND_PLACE;
        }
        return RANK.THIRD_PLACE;
      case LOTTO.FOUR_MATCHES: return RANK.FOURTH_PLACE;
      case LOTTO.THREE_MATCHES: return RANK.FIFTH_PLACE;
    } return RANK.BANG;
  }

  calculateResult() {
    this.usersTotalRank.forEach((rank) => {
      this.rewardMoney += this.rankReward[rank];
      this.checkRank[rank] += 1;
    });    
    this.yield = ((this.rewardMoney / this.usersMoney) * CALCULATE.MAKE_PERCENTAGE).toFixed(CALCULATE.ROUND_OFF_FROM_SECOND_PLACE);
  }

  printResult() {
    MissionUtils.Console.print(RESULT_MESSAGE.OPENING_MESSAGE);
    MissionUtils.Console.print(RESULT_MESSAGE.FIFTH_PLACE + `${this.checkRank[RANK.FIFTH_PLACE]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.FOURTH_PLACE + `${this.checkRank[RANK.FOURTH_PLACE]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.THIRD_PLACE + `${this.checkRank[RANK.THIRD_PLACE]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.SECOND_PLACE + `${this.checkRank[RANK.SECOND_PLACE]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.FIRST_PLACE + `${this.checkRank[RANK.FIRST_PLACE]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.YIELD_FRONT_MESSAGEL + `${this.yield}` + RESULT_MESSAGE.YIELD_BACK_MESSAGEL);

    MissionUtils.Console.close();
  }
  
}

module.exports = LottoCalculator;
