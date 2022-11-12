const MissionUtils = require('@woowacourse/mission-utils');
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
    this.game.checkMoney(money);
    this.game.money = money;
    const lottoNums = money / 1000;
    for (let x = 0; x < lottoNums; x++) {
      const lottoNumbers = this.getRandomNumber();
      this.game.lottos.push(new Lotto(lottoNumbers));
    }
    printMessage.printLottos(this.game.lottos);
  }

  setWinLotto(inputNumbers) {
    const inputNumbersArray = inputNumbers.split(',').map(Number);
    this.game.winLotto = new Lotto(inputNumbersArray);
  }

  setBonusNumber(inputNumber) {
    this.game.checkBonusNumber(inputNumber);
    this.game.bonusNumber = Number(inputNumber);
  }

  getRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }
  getResult() {
    const result = new Result(this.game);
    printMessage.printResult(result.score);
    printMessage.printYeild(result.getYeild());
  }
}

module.exports = GameController;
