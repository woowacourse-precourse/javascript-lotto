const MissionUtils = require('@woowacourse/mission-utils');
const input = require('./UI/Input');
const Lotto = require('./Lotto');
const printMessage = require('./UI/printMessage');

class App {
  lottos = [];
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
    const scoreObject = {
      three: 0,
      four: 0,
      five: 0,
      fiveAndBonus: 0,
      six: 0,
    };

    this.lottos.forEach((lotto) => {
      const score = this.getScore(lotto);
      if (score == 3) scoreObject.three++;
      if (score == 4) scoreObject.four++;
      if (score == 5) {
        if (this.getIsBonus(lotto)) scoreObject.fiveAndBonus++;
        if (!this.getIsBonus(lotto)) scoreObject.five++;
      }
      if (score == 6) scoreObject.six++;
    });
    printMessage.printResult(scoreObject);
  }

  getScore(Lotto) {
    let count = 0;
    Lotto.lottoNumbers.forEach((num) => {
      if (this.winLotto.lottoNumbers.includes(num)) count++;
    });
    return count;
  }

  getIsBonus(Lotto) {
    if (Lotto.lottoNumbers.includes(this.bonusNumber)) {
      return true;
    }
  }
}

new App().play();
module.exports = App;
