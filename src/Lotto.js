const MissionUtils = require('@woowacourse/mission-utils');
const { lottoInputCheckHandler } = require('./Validator.js');
const { print, reducer } = require('./Funcs');
const User = require('./User.js');

class Lotto {
  #numbers;

  constructor(numbers) {
    const winningNumbers = lottoInputCheckHandler(numbers);
    this.#numbers = {
      winningNumbers: winningNumbers,
      bonusNumber: 0,
    };
  }

  // TODO: 추가 기능 구현

  get numbers() {
    return this.#numbers;
  }
  setBonusNumber(input) {
    this.#numbers.bonusNumber = Number(input);
  }

  static lottoGenerator() {
    const randomNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNums.sort((a, b) => a - b);
  }

  calculateRank(mylotto, winningLotto, bonus, record) {
    const mine = new Set(mylotto);
    const winning = new Set(winningLotto);
    const score = [...mine].filter(x => winning.has(x)).length;

    if (score === 6) return (record.first.count += 1);
    if (score === 5 && mine.has(bonus)) return (record.second.count += 1);
    if (score === 5) return (record.third.count += 1);
    if (score === 4) return (record.fourth.count += 1);
    if (score === 3) return (record.fifth.count += 1);
  }

  calculateProfitRatio(record, spend) {
    const total = Object.entries(record).reduce((acc, cur) => {
      const count = 0 || cur[1].count;
      const price = cur[1].money;
      return acc + count * price;
    }, 0);
    return (total / spend).toFixed(1);
  }

  printLottoResult() {}
}

module.exports = Lotto;
