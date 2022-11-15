const { Console } = require('@woowacourse/mission-utils');
const checkPriceValidation = require('./checkValid/checkPriceValidation');
const { LottoBuilder } = require('./Lotto');
const {
  checkWinningValidation,
} = require('./checkValid/checkWinningValidation');

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
      }
      this.close();
    });
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
