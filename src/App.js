const MissionUtils = require('@woowacourse/mission-utils');
const input = require('./UI/Input');
const Lotto = require('./Lotto');

class App {
  lottos = [];
  winLotto;
  bonusNumber;

  play() {
    input.call(
      this,
      this.getLottosByMoney,
      this.setWinLotto,
      this.setBonusNumber
    );
  }

  getLottosByMoney(money) {
    this.checkMoney(money);
    const lottoNums = money / 1000;
    for (let x = 0; x < lottoNums; x++) {
      const lottoNumbers = this.getRandomNumber();
      this.lottos.push(new Lotto(lottoNumbers));
    }
  }

  setWinLotto(inputNumbers) {}
  setBonusNumber(inputNumber) {}

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
}

new App().play();
module.exports = App;
