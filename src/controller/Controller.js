const { RULE, NUMBER_RANGE, DECIMAL_PLACE } = require('../utils/constants');
const { pickUniqueNumbersInRange, calcPercentRounding } = require('../utils/utils');
const View = require('../view/View');
const Lotto = require('../Lotto');
const Deposit = require('../model/Deposit');
const Statistic = require('../model/Statistic');
const BonusNumber = require('../model/BonusNumber');
const Validator = require('../model/Validator');

class Controller {
  start() {
    View.printStart();
    View.readLine((input) => {
      this.deposit = new Deposit(input);
      View.printQuantity(this.deposit.quantity);
      this.purchase();
    });
  }

  purchase() {
    this.purchasedLottos = Array.from({ length: this.deposit.quantity })
      .map(() => {
        const numbers = pickUniqueNumbersInRange(
          NUMBER_RANGE.START,
          NUMBER_RANGE.END,
          RULE.FIRST.NUMBER_OF_SAME,
        );

        return new Lotto(numbers);
      });

    this.renderPurchasedLottos();
  }

  renderPurchasedLottos() {
    this.purchasedLottos.forEach((purchasedLotto) => {
      View.printArray(purchasedLotto.numbers);
    });
    this.generateWinningLotto();
  }

  generateWinningLotto() {
    View.printWinningLotto();
    View.readLine((input) => {
      this.winningLotto = new Lotto(input.split(','));
      this.generateBonusNumber();
    });
  }

  generateBonusNumber() {
    View.printBonusNumber();
    View.readLine((input) => {
      Validator.validateBonusNumber(this.winningLotto.numbers, input);
      this.bonusNumber = new BonusNumber(input);
      this.generateStatistic();
    });
  }

  generateStatistic() {
    this.statistic = new Statistic();

    this.purchasedLottos.forEach((purchasedLotto) => {
      this.statistic.putInCounts(
        this.winningLotto.numbers,
        this.bonusNumber.value,
        purchasedLotto.numbers,
      );
    });

    this.renderStatistic();
  }

  renderStatistic() {
    View.printStatistic(this.statistic.counts);

    const percentageRevenue = calcPercentRounding(
      this.statistic.revenue,
      this.deposit.amount,
      DECIMAL_PLACE,
    );

    View.printPercentageRevenue(percentageRevenue);
    View.close();
  }
}

module.exports = Controller;
