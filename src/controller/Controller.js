const { RULE, NUMBER_RANGE, DECIMAL_PLACE } = require('../utils/constants');
const { pickUniqueNumbersInRange, calcPercentRounding } = require('../utils/utils');
const View = require('../view/View');
const Lotto = require('../Lotto');
const Deposit = require('../model/Deposit');
const Statistic = require('../model/Statistic');
const BonusNumber = require('../model/BonusNumber');

class Controller {
  start() {
    View.printStart();
    View.readLine((input) => {
      this.deposit = new Deposit(Number(input));
      View.printQuantity(this.deposit.quantity);
      this.purchase();
    });
  }

  purchase() {
    const purchasedLottos = [];

    Array.from({ length: this.deposit.quantity })
      .forEach(() => {
        const numbers = pickUniqueNumbersInRange(
          NUMBER_RANGE.START,
          NUMBER_RANGE.END,
          RULE.FIRST.NUMBER_OF_SAME,
        );
        const newLotto = new Lotto(numbers);
        purchasedLottos.push(newLotto);
        View.printArray(newLotto.numbers);
      });

    this.purchasedLottos = purchasedLottos;
    this.generateWinningLotto();
  }

  generateWinningLotto() {
    View.printWinningLotto();
    View.readLine((input) => {
      this.winningLotto = new Lotto(input.split(',').map(Number));
      this.generateBonusNumber();
    });
  }

  generateBonusNumber() {
    View.printBonusNumber();
    View.readLine((input) => {
      this.#validateBonusNumber(input);
      this.bonusNumber = new BonusNumber(Number(input));
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
    View.printStatistic(this.statistic);

    const percentageRevenue = calcPercentRounding(
      this.statistic.revenue,
      this.deposit.amount,
      DECIMAL_PLACE,
    );

    View.printPercentageRevenue(percentageRevenue);
    View.close();
  }

  #validateBonusNumber(number) {
    if (this.winningLotto.numbers.includes(Number(number))) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 겹칠 수 없습니다.');
    }
  }
}

module.exports = Controller;
