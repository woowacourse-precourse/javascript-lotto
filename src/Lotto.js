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

  toString() {
    return `[${this.#numbers.join(', ')}]`;
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
    this.printWinningHistory(winningArray, lottos.length);
  }

  countWinning(matches, bonus, winningArray) {
    if (matches === 3) winningArray[0] += 1;
    else if (matches === 4) winningArray[1] += 1;
    else if (matches === 5) winningArray[2] += 1;
    else if (matches === 5 && bonus === 1) winningArray[3] += 1;
    else if (matches === 6) winningArray[4] += 1;
  }

  printWinningHistory(winningArray, money) {
    Console.print(`3개 일치 (5,000원) - ${winningArray[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${winningArray[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningArray[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningArray[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${winningArray[4]}개`);

    this.printRate(winningArray, money);
  }

  printRate(winningArray, money) {
    let profit =
      winningArray[0] * 5000 +
      winningArray[1] * 50000 +
      winningArray[2] * 1500000 +
      winningArray[3] * 30000000 +
      winningArray[4] * 2000000000;
    let rate = ((profit / (money * 1000)) * 100).toFixed(1);

    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

module.exports = Lotto;
