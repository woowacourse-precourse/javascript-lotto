const Cost = require('./Cost');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const { COST, INPUT_MESSAGE, ERROR_MESSAGE } = require('./constant/constant');
const { getInput, print } = require('./utils');
const BuyLotto = require('./BuyLotto');
const { getLottoResult } = require('./lottoResult');

class App {
  constructor() {
    this.cost = 0;
    this.lotto = [];
    this.bonus = 0;
    this.buyLotto = [];
  }

  getCost() {
    let inputCost;
    getInput(INPUT_MESSAGE.COST, (input) => {
      inputCost = +input;
    });
    this.cost = new Cost(inputCost);
  }

  // 구매한 로또 번호
  buyLottoCountTimes() {
    this.buyLotto = new BuyLotto(this.cost.getValue() / COST.DIVIDE);
    let buyLottoResult = `${this.buyLotto.getBuyCount()}\n`;
    this.buyLotto.getValue().forEach((buy) => {
      buyLottoResult += `[${buy.join(', ')}]\n`;
    });
    return buyLottoResult;
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

  // 로또와 보너스 번호가 겹치는지 확인
  lottoBonusCheck() {
    if (this.lotto.getValue().filter((number) => number === this.bonus.getValue()).length === 1) {
      throw new Error(ERROR_MESSAGE.BONUS.NUMBER_DUPLICATED);
    }
  }

  getInputAndValidate() {
    this.getCost();
    this.getLottoNumber();
    this.getBonusNumber();
    this.lottoBonusCheck();
  }

  play() {
    this.getInputAndValidate();
    print(this.buyLottoCountTimes());
    print(
      getLottoResult(
        this.cost.getValue(),
        this.lotto.getValue(),
        this.bonus.getValue(),
        this.buyLotto.getValue(),
      ),
    );
  }
}
module.exports = App;
