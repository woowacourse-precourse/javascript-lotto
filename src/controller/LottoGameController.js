const BonusValidator = require('../validator/BonusValidator');
const MoneyValidator = require('../validator/MoneyValidator');
const { INPUT_MESSAGE } = require('../constant');
const { readLine } = require('../utils/Utils');

class LottoGameController {
  constructor(model, view, calculator) {
    this.lottoGameModel = model;
    this.lottoGameView = view;
    this.calculatorModel = calculator;

    this.money;
    this.lottos;
    this.winningLotto;
  }

  start() {
    this.setGame();
    this.pickWinningLotto();

    const result = this.calculatorModel.draw(this.lottos, this.winningLotto);
    this.lottoGameView.printResult(result, this.money);
  }

  setGame() {
    readLine(INPUT_MESSAGE.MONEY, (input) => {
      MoneyValidator.validate(input);

      this.money = input;
      this.lottos = this.lottoGameModel.payMoney(input);

      this.printLottos(this.lottos);
    });
  }

  printLottos(lottos) {
    this.lottoGameView.printLottoCount(lottos.length);
    this.lottoGameView.printLottoNumbers(lottos);
  }

  pickWinningLotto() {
    readLine(INPUT_MESSAGE.LOTTO_NUMBER, (winning) => {
      winning = winning.split(',').map(Number);

      this.pickBonusNumber(winning);
    });
  }

  pickBonusNumber(winning) {
    readLine(INPUT_MESSAGE.BONUS_NUMBER, (bonus) => {
      BonusValidator.validate(winning, Number(bonus));

      this.winningLotto = [winning, Number(bonus)];
    });
  }
}

module.exports = LottoGameController;
