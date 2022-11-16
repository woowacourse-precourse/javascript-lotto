const Lotto = require('./Lotto');
const { LOTTO, LOTTO_RANK, NUMBER, RATE_OF_RETURN } = require('./Constant');

class GameHandler {
  static randomNumberCount(buyLotto) {
    let count = NUMBER.ZERO;
    while (buyLotto !== NUMBER.ZERO) {
      buyLotto -= LOTTO.PRICE;
      count += NUMBER.ONE;
    }

    return count;
  }

  static randomNumberSaveKit(lottoCount) {
    const save = [];
    while (lottoCount !== NUMBER.ZERO) {
      lottoCount -= NUMBER.ONE;
      const randomNumber = Lotto.getRandomNumber();
      if (new Lotto(randomNumber)) {
        save.push(randomNumber);
      }
    }

    return save;
  }

  static jackpotCountRankMatching(count, bonus, matchList) {
    if (count === NUMBER.SIX) return matchList[LOTTO_RANK.ONE] += NUMBER.ONE;
    if (count === NUMBER.FIVE && bonus) {
      return matchList[LOTTO_RANK.TWO] += NUMBER.ONE;
    }
    if (count === NUMBER.FIVE) return matchList[LOTTO_RANK.THREE] += NUMBER.ONE;
    if (count === NUMBER.FOUR) return matchList[LOTTO_RANK.FOUR] += NUMBER.ONE;
    if (count === NUMBER.THREE) return matchList[LOTTO_RANK.FIVE] += NUMBER.ONE;

    return matchList;
  }

  static hasJackpotCount(buylottos, jackpotNumber, bonusNumber) {
    const matchList = new Array(NUMBER.FIVE).fill(NUMBER.ZERO);
    buylottos.map((buylotto) => {
      let count = NUMBER.ZERO;
      let bonus = NUMBER.ZERO;
      jackpotNumber.split(',').map((jackpot) => {
        buylotto.includes(Number(jackpot)) && count++;
        jackpotNumber.includes(bonusNumber) && bonus++;
      });
      this.jackpotCountRankMatching(count, bonus, matchList);
    });

    return matchList;
  }

  static jackpotMoneyList() {
    return LOTTO.JACKPOT_MONEY_LIST;
  }

  static totalJackpotMoney(matchList, monyList) {
    let totalMoney = NUMBER.ZERO;
    matchList.forEach((jackpot, index) => {
      if (jackpot) {
        totalMoney += jackpot * monyList[index];
      }
    });
    
    return totalMoney;
  }

  static rateOfReturnCalculator(totalMoney, buyLottoprice) {
    return ((totalMoney / buyLottoprice) * RATE_OF_RETURN.MULTIPLY_VALUE).toFixed(NUMBER.ONE);
  }
}

module.exports = GameHandler;
