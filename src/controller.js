const { Random } = require('@woowacourse/mission-utils');
const CheckLotto = require('./check-lotto');
const Lotto = require('./Lotto');
const Calculate = require('./utils/calculate');
const { NUMBER_LIMIT, ERROR_MASSAGE } = require('./utils/constant');
const View = require('./view');
const WinningNumber = require('./winning-number');

const { MIN_NUMBER, MAX_NUMBER, QUANTITY, UNIT_AMOUNT } = NUMBER_LIMIT;
const { MAX_PURCHASES_MESSAGE, POSSIBLE_AMOUNT_NUMBER_MESSAGE, INCORRECT_INPUT_MESSAGE } =
  ERROR_MASSAGE;
const { MAX_PURCHASES } = NUMBER_LIMIT;

class Controller {
  constructor() {
    this.lottos = [];
    this.view = new View(this);
    this.winningNumber = new WinningNumber();
    this.checklotto = new CheckLotto(this);
    this.calculate = new Calculate(this);
  }

  amountInputValidate(input) {
    if (Number(input) > MAX_PURCHASES) throw new Error(MAX_PURCHASES_MESSAGE);

    if (input[0] === '0') throw new Error(INCORRECT_INPUT_MESSAGE);

    input.split('').forEach((number) => {
      if (Number(number) >= 0 && Number(number) <= 9) return;

      throw new Error(POSSIBLE_AMOUNT_NUMBER_MESSAGE);
    });
    this.generateLotto(input);
  }

  generateLotto(answer) {
    const quantity = Math.trunc(answer / UNIT_AMOUNT);
    this.totalAmount = quantity * UNIT_AMOUNT;

    for (let count = 0; count < quantity; count += 1) {
      this.lottos.push(
        new Lotto(Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, QUANTITY)),
      );
    }

    View.printLottos(this.lottos);
    this.view.winningNumberInput();
  }

  enterWinningNumber(answer) {
    this.winningNumber.setWinningNumber(answer);
    this.view.bonusNumberInput();
  }

  enterBonusNumber(answer) {
    this.winningNumber.setBonusNumber(answer);
    this.checkingLotto();
  }

  checkingLotto() {
    this.checklotto.checkLotto();
    this.endgame();
  }

  endgame() {
    const winningResult = this.checklotto.getWinningresult();
    const earningRate = this.calculate.getEarningRate(winningResult);
    View.printWinningResult(winningResult, earningRate);
    View.endgame();
  }

  init() {
    this.view.AmountInput();
  }
}

module.exports = Controller;
