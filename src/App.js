const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const console = MissionUtils.Console;

class App {
  #winningNumbers;
  #bonusNumber;

  setWinningNumbers(numbers) {
    Lotto.validateNumbers(numbers);
    this.#winningNumbers = numbers;
  }

  setBonusNumber(number) {
    this.#bonusNumber = number;
  }

  play() {
    console.print('구입 금액을 입력해주세요.');
    console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
