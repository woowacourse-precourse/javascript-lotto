const MissionUtils = require('@woowacourse/mission-utils');
const { lottoInputCheckHandler } = require('./Validator.js');
const { print, reducer } = require('./Funcs');

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

  calculateRank(mylotto, winningLotto, record) {
    const mine = new Set(mylotto);
    const winning = new Set(winningLotto.winningNumbers);
    const score = [...mine].filter(x => winning.has(x)).length;

    if (score === 6) return (record.first.count += 1);
    if (score === 5 && mine.has(this.winningLotto.bonusNumber))
      return (record.second.count += 1);
    if (score === 5) return (record.third.count += 1);
    if (score === 4) return (record.fourth.count += 1);
    if (score === 3) return (record.fifth.count += 1);
  }

}

module.exports = Lotto;
