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

    for (let i = 0; i < lottos.length; i++) {
      let matches = 0;
      let bonusNumber = 0;
      for (let j = 0; j < winning.length; j++) {
        if (lottos[i].includes(Number(winning[j]))) matches += 1;
        if (matches === 5 && lottos[i].includes(bonus)) bonusNumber += 1;
      }
    }
  }
}

module.exports = Lotto;
