const { Random } = require('@woowacourse/mission-utils');
const CheckLotto = require('./check-lotto');
const Lotto = require('./Lotto');
const Calculate = require('./utils/calculate');
const { NUMBER_LIMIT } = require('./utils/constant');
const Validation = require('./utils/validation');
const View = require('./view');
const WinningNumber = require('./winning-number');

const { MIN_NUMBER, MAX_NUMBER, QUANTITY, UNIT_AMOUNT } = NUMBER_LIMIT;

class Controller {
  constructor() {
    this.lottos = [];
    this.view = new View(this);
    this.winningNumber = new WinningNumber();
    this.checklotto = new CheckLotto(this);
    this.validation = new Validation(this);
    this.calculate = new Calculate(this);
  }

  generateLotto(answer) {
    const quantity = answer / UNIT_AMOUNT;
    this.totalAmount = quantity * UNIT_AMOUNT;
    Validation.amountInputValidate(answer);

    for (let count = 0; count < quantity; count += 1) {
      this.lottos.push(
        new Lotto(Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, QUANTITY)),
      );
    }

    View.printLottos(this.lottos);
    this.view.winningNumber();
  }

  enterWinningNumber(answer) {
    Validation.winningNumberValidate(answer);
    this.winningNumber.setWinningNumber(answer);
    this.view.bonusNumberInput();
  }

  enterBonusNumber(answer) {
    this.validation.bonusNumberValidate(answer);
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
    this.view.getAmountInput();
  }
}

module.exports = Controller;
