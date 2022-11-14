const MissionUtils = require("@woowacourse/mission-utils");
const { RESULT_MESSAGE } = require("./constants/MessageConstants");
const { MONEY, REWARD_MONEY, RANK, LOTTO, CALCULATE } = require("./constants/NumberConstants");

class LottoCalculator {
  usersLottos;
  usersMoney;
  winningNumbers;
  bonusNumber;
  yield;
  usersRewardMoney = MONEY.ZERO;
  usersWinningRecord = [];
  winningReward = [REWARD_MONEY.BANG, REWARD_MONEY.FIRST, REWARD_MONEY.SECOND, REWARD_MONEY.THIRD, REWARD_MONEY.FOURTH, REWARD_MONEY.FIFTH];
  countWinningRecord = Array.from({length: LOTTO.SIX_NUMBERS}, () => 0);
  
  

  constructor(usersLottos) {
    this.usersLottos = usersLottos;
    this.usersMoney = this.usersLottos.length * MONEY.IN_THOUSAND;
  }

  calculate() {
    this.usersLottos.forEach((usersLotto) => {
      const rank = this.compareNumber(usersLotto);
      this.usersWinningRecord.push(rank);
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
    this.usersWinningRecord.forEach((rank) => {
      this.usersRewardMoney += this.winningReward[rank];
      this.countWinningRecord[rank] += 1;
    });    
    this.yield = ((this.usersRewardMoney / this.usersMoney) * CALCULATE.MAKE_PERCENTAGE).toFixed(CALCULATE.ROUND_OFF_FROM_SECOND_PLACE);
  }

  printResult() {
    MissionUtils.Console.print(RESULT_MESSAGE.OPENING_MESSAGE);
    MissionUtils.Console.print(RESULT_MESSAGE.FIFTH_PLACE + `${this.countWinningRecord[RANK.FIFTH_PLACE]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.FOURTH_PLACE + `${this.countWinningRecord[RANK.FOURTH_PLACE]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.THIRD_PLACE + `${this.countWinningRecord[RANK.THIRD_PLACE]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.SECOND_PLACE + `${this.countWinningRecord[RANK.SECOND_PLACE]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.FIRST_PLACE + `${this.countWinningRecord[RANK.FIRST_PLACE]}` + RESULT_MESSAGE.UNIT);
    MissionUtils.Console.print(RESULT_MESSAGE.YIELD_FRONT_MESSAGEL + `${this.yield}` + RESULT_MESSAGE.YIELD_BACK_MESSAGEL);

    MissionUtils.Console.close();
  } 
}

module.exports = LottoCalculator;
