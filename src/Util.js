const { Random } = require('@woowacourse/mission-utils');
const { amountRegExp, AMOUNT_BY_RANK, SCORE_MSG_BY_RANK, CONSOLE_MSG } = require('./lib/constant');

class Util {
  static isRight(regExp) {
    return (amount) => {
      const target = amount.trim();
      return regExp.test(target);
    };
  }

  static isMultipleOf1000(amount) {
    return Util.isRight(amountRegExp)(amount);
  }

  static isLottoNumbers(lottoNumbers, start, end, size) {
    return lottoNumbers.filter((num) => num >= start && num <= end).length === size;
  }

  static isDuplicated(arr) {
    const set = new Set([...arr]);
    return set.size !== arr.length;
  }

  static isInclude(arr) {
    return (elem) => arr.includes(elem);
  }

  static divide(divider) {
    return (share) => Number(share) / divider;
  }

  static divide1000(share) {
    return Util.divide(1000)(share);
  }

  static getRandomNumbers(start, end, size) {
    const pickNums = Random.pickUniqueNumbersInRange(start, end, size);
    pickNums.sort((a, b) => a - b);

    return pickNums;
  }

  static splitStr(sep) {
    return (str) => str.trim().split(sep);
  }
  static splitStrByComma(str) {
    return Util.splitStr(',')(str);
  }

  static getRank(score, bonusScore) {
    switch (score) {
      case 6:
        return 1;
      case 5:
        return bonusScore === 1 ? 2 : 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return 0;
    }
  }

  static getWinMessage(rank, cnt) {
    const scoreMsg = SCORE_MSG_BY_RANK[rank];
    const amountMsg = AMOUNT_BY_RANK[rank];

    return CONSOLE_MSG.winMessage(scoreMsg, amountMsg, cnt);
  }

  static getWinAmount(rank, cnt) {
    const amountStr = AMOUNT_BY_RANK[rank];
    const winAmount = Number(Util.splitStrByComma(amountStr).join(''));

    return winAmount * cnt;
  }

  static getRateStrOfProfit(profit, spend) {
    const rate = (profit / spend) * 100;
    const rateStr = Util.getRoundRateStr(1)(rate);
    const [quotientStr, remainderStr] = rateStr.split('.');
    const quotientCommaStr = Util.getCommaStr(quotientStr);

    return CONSOLE_MSG.rateOfProfit(quotientCommaStr, remainderStr);
  }

  static getRoundRateStr(digit) {
    return (rate) => {
      const roundUnit = 10 ** digit;
      const rountRate = Math.round((rate + Number.EPSILON) * roundUnit) / roundUnit;

      return rountRate.toFixed(digit);
    };
  }

  static getCommaStr(str) {
    return Number(str).toLocaleString();
  }

  static lottoArrToString(arr) {
    return JSON.stringify(arr).split(',').join(', ');
  }
}

module.exports = Util;
