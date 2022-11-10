const { LottoBuilder } = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');
const { amountValidation } = require('./validation/amountValidation');
const { winningValidation } = require('./validation/winningValidation');
const { bonusValidation } = require('./validation/bonusValidation');

class App {
  constructor() {
    this.LottoBuilder = new LottoBuilder();
  }

  play() {
    this.setPurchaseAmount();
  }

  setPurchaseAmount() {
    this.print('구입금액을 입력해 주세요.');
    this.readLine('', (input) => {
      if (amountValidation(input)) {
        const lottoList = this.LottoBuilder.creatLottoList(input);
        this.showLottoList(lottoList);
        this.setWinningNumber();
      }
    });
  }

  setWinningNumber() {
    this.print('당첨 번호를 입력해 주세요.');
    this.readLine('', (input) => {
      if (winningValidation(input)) {
        this.LottoBuilder.WinningNumber = input.split(',');
        this.setBonusNumber();
      }
    });
  }

  setBonusNumber() {
    this.print('보너스 번호를 입력해 주세요.');
    this.readLine('', (input) => {
      if (bonusValidation(input, this.LottoBuilder.WinningNumber)) {
        this.LottoBuilder.bonusNumber = input;
      }
    });
  }

  showLottoList(lists) {
    this.print(`${lists.length}개를 구매했습니다.`);
    lists.forEach((list) => {
      this.print(`[${list.join(', ')}]`);
    });
  }

  readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
  }

  print(message) {
    return MissionUtils.Console.print(message);
  }
}

const app = new App();
app.play();

module.exports = App;
