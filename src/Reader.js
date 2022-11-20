const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_MSG, RANK_PRICE } = require('./constants/lotto.constants');

class Reader {
  static comparisonOperator(expenditure, userLottoList, winnerCondition) {
    const winnerNumbers = winnerCondition[0];
    const bonusNumber = winnerCondition[1];
    let result = [0, 0, 0, 0, 0];
    userLottoList.forEach((userLottoNumbers) => {
      const lottoCount = Reader.eachOperator(userLottoNumbers, winnerNumbers, bonusNumber);
      Reader.increaseCount(lottoCount, result);
    });
    const priceRate = Reader.getPriceRate(expenditure, result);
    Reader.showPriceResult(result, priceRate);
  }

  static eachOperator(userLottoNumbers, winnerNumbers, bonusNumber) {
    let bonusCount, winningsCount;
    if (userLottoNumbers.includes(bonusNumber)) {
      bonusCount = Reader.getCountResult(userLottoNumbers, winnerNumbers);
      if (bonusCount !== 5) bonusCount = 0;
    } else {
      winningsCount = Reader.getCountResult(userLottoNumbers, winnerNumbers);
    }
    return [winningsCount, bonusCount];
  }

  static getCountResult(userLottoNumbers, winnerNumbers) {
    let count = 0;
    winnerNumbers.forEach((number) => {
      if (userLottoNumbers.includes(number)) count++;
    });
    return count;
  }

  static increaseCount(lottoCount, result) {
    if (lottoCount[0] === 3) result[0]++;
    else if (lottoCount[0] === 4) result[1]++;
    else if (lottoCount[0] === 5) result[2]++;
    else if (lottoCount[0] === 6) result[4]++;
    if (lottoCount[1] === 5) result[3]++;
  }

  static getPriceRate(expenditure, result) {
    let priceRate = 0;
    result.forEach((count, index) => {
      priceRate += count * RANK_PRICE[index];
    });
    priceRate = (priceRate * 100) / expenditure;
    return priceRate;
  }

  static showPriceResult(result, priceRate) {
    Console.print(LOTTO_MSG.SHOW_RESULT(result, priceRate));
  }
}

module.exports = Reader;
