const MissionUtils = require('@woowacourse/mission-utils');
const LOTTO = require('../constant/constant.js');
const Lotto = require('../Model/Lotto.js');
const LottoGame = require('../Model/LottoGame.js');
const Result = require('../Model/Result.js');
const input = require('../View/Input.js');
const printMessage = require('../View/printMessage');

class GameController {
  constructor() {
    this.game = new LottoGame();
  }
  play() {
    input.call(
      this,
      this.getLottosByMoney,
      this.setWinLotto,
      this.setBonusNumber,
      this.getResult
    );
  }

  getLottosByMoney(money) {
    this.game.money = Number(money);
    this.game.getLottos();
    printMessage.printLottos(this.game.lottos);
  }

  setWinLotto(inputNumbers) {
    const inputNumbersArray = inputNumbers.split(',').map(Number);
    this.game.winLotto = new Lotto(inputNumbersArray);
  }

  setBonusNumber(inputNumber) {
    this.game.bonusNumber = Number(inputNumber);
  }

  getResult() {
    const result = new Result(this.game);
    printMessage.printResult(result.score);
    printMessage.printYeild(result.getYeild());
  }
}

module.exports = GameController;
