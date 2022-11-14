const Lotto = require('../model/Lotto');
const LottoNumber = require('../model/LottoNumber');
const Deposit = require('../model/Deposit');
const Statistic = require('../model/Statistic');
const Validator = require('../model/Validator');
const { RULE, NUMBER_RANGE, DECIMAL_PLACE } = require('../constants');
const { pickUniqueNumbersInRange, calcPercentRounding } = require('../utils');

class LottoManager {
  #deposit;
  #purchasedLottos;
  #winningLotto;
  #bonusNumber;
  #statistic;

  get quantity() {
    return this.#deposit.quantity;
  }

  get purchasedLottos() {
    return this.#purchasedLottos.map((lotto) => lotto.numbers);
  }

  get counts() {
    return this.#statistic.counts;
  }

  get percentageRevenue() {
    return calcPercentRounding(
      this.#statistic.revenue,
      this.#deposit.amount,
      DECIMAL_PLACE,
    );
  }

  purchase(amount) {
    this.#deposit = new Deposit(amount);
    this.#purchasedLottos = Array.from({ length: this.#deposit.quantity })
      .map(() => {
        const numbers = pickUniqueNumbersInRange(
          NUMBER_RANGE.START,
          NUMBER_RANGE.END,
          RULE.FIRST.NUMBER_OF_SAME,
        );

        return new Lotto(numbers);
      });
  }

  generateWinningLotto(numbers) {
    this.#winningLotto = new Lotto(numbers.split(','));
  }

  generateBonusNumber(number) {
    Validator.validateBonusNumber(this.#winningLotto.numbers, number);
    this.#bonusNumber = new LottoNumber(number);
  }

  generateStatistic() {
    this.#statistic = new Statistic();

    this.#purchasedLottos.forEach((purchasedLotto) => {
      const judgedResult = Lotto.judgeLotto(
        this.#winningLotto.numbers,
        this.#bonusNumber.value,
        purchasedLotto.numbers,
      );
      this.#statistic.putInCounts(judgedResult);
    });
  }
}

module.exports = LottoManager;
