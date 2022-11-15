const { Console } = require('@woowacourse/mission-utils');
const checkPriceValidation = require('./checkValid/checkPriceValidation');
const { LottoBuilder } = require('./Lotto');
const checkWinningValidation = require('./checkValid/checkWinningValidation');
const checkBonusValidation = require('./checkValid/checkBonusValidation');

class App {
  constructor() {
    this.LottoBuilder = new LottoBuilder();
  }

  play() {
    this.setPurchaseAmount();
  }

  setPurchaseAmount() {
    this.print('구입금액을 입력해 주세요.');
    this.readLine('', input => {
      if (checkPriceValidation(input)) {
        const lottoList = this.LottoBuilder.createLottoList(input);
        this.showLottoList(lottoList);
        this.setWinningNumber();
      }
      // this.close();
    });
  }

  setWinningNumber() {
    this.print('당첨 번호를 입력해 주세요.');
    this.readLine('', input => {
      if (checkWinningValidation(input)) {
        this.LottoBuilder.WinningNumber = input.split(',');
        this.setBonusNumber();
      }
    });
  }

  setBonusNumber() {
    this.print('보너스 번호를 입력해 주세요.');
    this.readLine('', input => {
      if (checkBonusValidation(input, this.LottoBuilder.WinningNumber)) {
        this.LottoBuilder.bonusNumber = input;
        this.setLotto();
      }
    });
  }

  setLotto() {
    const lotto = this.LottoBuilder.build();
    lotto.progress();
  }

  showLottoList(lists) {
    this.print(`${lists.length}개를 구매했습니다.`);
    lists.forEach(list => {
      this.print(`[${list.join(', ')}]`);
    });
  }

  readLine(message, callback) {
    return Console.readLine(message, callback);
  }

  print(message) {
    return Console.print(message);
  }

  close() {
    return Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
