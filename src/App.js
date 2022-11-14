const Cost = require('./Cost');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const { INPUT_MESSAGE, ERROR_MESSAGE } = require('./constant/constant');
const { getInput } = require('./utils');

class App {
  constructor() {
    this.cost = 0;
    this.lotto = [];
    this.bonus = 0;
  }

  getCost() {
    getInput(INPUT_MESSAGE.COST, (input) => {
      this.cost = new Cost(+input);
    });
  }

  getLottoNumber() {
    getInput(INPUT_MESSAGE.LOTTO_NUMBERS, (input) => {
      this.lotto = new Lotto(input.split(',').map((number) => +number));
    });
  }

  getBonusNumber() {
    getInput(INPUT_MESSAGE.BONUS_NUMBER, (input) => {
      this.bonus = new Bonus(+input);
    });
  }

  getCostLottoBonusInput() {
    this.getCost();
    this.getLottoNumber();
    this.getBonusNumber();
  }

  lottoBonusCheck() {
    if (this.lotto.getValue().filter((number) => number === this.bonus.getValue()).length === 1) {
      throw new Error(ERROR_MESSAGE.BONUS.NUMBER_DUPLICATED);
    }
  }

  play() {
    this.getCostLottoBonusInput();
    this.lottoBonusCheck();
  }
}
module.exports = App;
