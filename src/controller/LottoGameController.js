const { INPUT_MESSAGE } = require('../constant');
const Lotto = require('../Lotto');
const { readLine } = require('../utils/Utils');
const { MoneyValidator, BonusValidator } = require('../utils/Validator');

class LottoGameController {
  constructor(model, view) {
    this.lottoGameModel = model;
    this.lottoGameView = view;
    this.lottos;
    this.winningLotto;
  }

  start() {
    this.setGame();
    this.pickWinningLotto();
  }

  setGame() {
    readLine(INPUT_MESSAGE.MONEY, (input) => {
      MoneyValidator.validate(input);

      this.lottos = this.lottoGameModel.payMoney(input);

      this.printLottos(this.lottos);
    });
  }

  printLottos(lottos) {
    this.lottoGameView.printLottoCount(lottos.length);
    this.lottoGameView.printLottoNumbers(lottos);
  }

  pickWinningLotto() {
    readLine(INPUT_MESSAGE.LOTTO_NUMBER, (input) => {
      input = input.split(',').map(Number);
      let winningLotto = new Lotto(input);

      this.pickBonusNumber(winningLotto);
    });
  }

  pickBonusNumber(lotto) {
    readLine(INPUT_MESSAGE.BONUS_NUMBER, (input) => {
      lotto.bonusValidate(input);

      this.winningLotto = [lotto, Number(input)];
    });
  }
}

module.exports = LottoGameController;
