const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers !== undefined) {
      const NUMBERS_IN_RANGE = numbers.filter((el) => Number(el) >= 1 && Number(el) <= 45);

      if (numbers.length !== 6) throw new Error(Messages.SIX_NUMBERS);
      if (numbers.length !== new Set(numbers).size) throw new Error(Messages.NOT_DUPLICATE);
      if (numbers.length !== NUMBERS_IN_RANGE.length) {
        throw new Error(Messages.NUMBERS_IN_RANGE);
      }
    }
  }

  lottosWinningBonus(lottos, winning, bonus) {
    winning = winning.split(',');

    let winningArray = [0, 0, 0, 0, 0];
    for (let i = 0; i < lottos.length; i++) {
      let matches = 0;
      let bonusNumber = 0;
      for (let j = 0; j < winning.length; j++) {
        if (lottos[i].includes(Number(winning[j]))) matches += 1;
        if (matches === 5 && lottos[i].includes(bonus)) bonusNumber += 1;
      }
      this.countWinning(matches, bonusNumber, winningArray);
    }
  }

  countWinning(matches, bonus, winningArray) {
    if (matches === 3) winningArray[0] += 1;
    else if (matches === 4) winningArray[1] += 1;
    else if (matches === 5) winningArray[2] += 1;
    else if (matches === 5 && bonus === 1) winningArray[3] += 1;
    else winningArray[4] += 1;
  }
}

module.exports = Lotto;
