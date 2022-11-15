const { Console } = require('@woowacourse/mission-utils');
const Bonus = require('./Bonus');
const {
  LOTTO_ERROR,
  BONUS_NUMBER_MESSAGE,
  STATISTICS,
  LOTTO_RESULT,
  LOTTO_PRICE,
  LOTTO_ERROR,
} = require('./constants/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  inputBonus(myLotto) {
    Console.readLine(BONUS_NUMBER_MESSAGE, (answer) => {
      const bonus = new Bonus(answer, this.#numbers);
      this.result(myLotto, bonus.number);
      Console.close();
    });
  }

  result(myLotto, bonus) {
    const counts = myLotto.map((numbers) => [numbers, this.match(numbers)]);
    const prize = this.count(counts, bonus);

    Console.print(STATISTICS);

    Console.print(`${LOTTO_RESULT.THREE}${prize.fifth}개`);
    Console.print(`${LOTTO_RESULT.FOUR}${prize.fourth}개`);
    Console.print(`${LOTTO_RESULT.FIVE}${prize.third}개`);
    Console.print(`${LOTTO_RESULT.FIVE_BONUS}${prize.second}개`);
    Console.print(`${LOTTO_RESULT.SIX}${prize.first}개`);

    this.rateOfReturn(myLotto.length * LOTTO_PRICE, prize);
  }

  match(numbers) {
    return numbers.reduce(
      (acc, number) => (this.#numbers.includes(number) ? acc + 1 : acc),
      0
    );
  }

  count(counts, bonus) {
    const prize = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    counts.forEach(([numbers, count]) => {
      switch (count) {
        case 6:
          prize.first += 1;
          break;
        case 5:
          numbers.includes(bonus) ? (prize.second += 1) : (prize.third += 1);
          break;
        case 4:
          prize.fourth += 1;
          break;
        case 3:
          prize.fifth += 1;
          break;
      }
    });

    return prize;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR.LENGTH);
    }

    if (numbers.some((number) => /[^0-9]/.test(number))) {
      throw new Error(LOTTO_ERROR.NUMBER);
    }

    if (
      numbers.some(
        (number) => numbers.indexOf(number) !== numbers.lastIndexOf(number)
      )
    ) {
      throw new Error(LOTTO_ERROR.DUPLICATION);
    }

    if (numbers.some((number) => !(number >= 1 && number <= 45))) {
      throw new Error(LOTTO_ERROR.DOMAIN);
    }
  }
}

module.exports = Lotto;
