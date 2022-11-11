const MissionUtils = require('@woowacourse/mission-utils');
const input = require('./UI/Input');
const printMessage = require('./UI/printMessage');

const Lotto = require('./Lotto');
const Result = require('./Result');

class App {
  lottos = [];
  money;
  winLotto;
  bonusNumber;

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
    this.money = money;
    this.checkMoney(money);
    const lottoNums = money / 1000;
    for (let x = 0; x < lottoNums; x++) {
      const lottoNumbers = this.getRandomNumber();
      this.lottos.push(new Lotto(lottoNumbers));
    }
    printMessage.printLottos(this.lottos);
  }

  setWinLotto(inputNumbers) {
    const inputNumbersArray = inputNumbers.split(',').map(Number);
    this.winLotto = new Lotto(inputNumbersArray);
  }

  setBonusNumber(inputNumber) {
    this.bonusNumber = Number(inputNumber);
  }

  checkMoney(money) {
    if (money % 1000 != 0) {
      throw new Error('돈은 1000원단위여야 합니다!');
    }
  }

  getRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  getResult() {
    const result = new Result(
      this.lottos,
      this.winLotto,
      this.bonusNumber,
      this.money
    );
    printMessage.printResult(result.score);
    printMessage.printYeild(result.getYeild());
  }
}

module.exports = App;
