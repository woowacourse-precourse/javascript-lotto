const { Console } = require('@woowacourse/mission-utils');
const ValidatePay = require('./ValidatePay');
const ValidateWinnigNumber = require('./ValidateWinningNumber');
const Lotto = require('./Lotto');
const makeLotto = require('./makeLotto');

class App {

  play() {
    this.buyLottoArray = [];
    this.inputPay();
  };

  inputPay() {
    Console.readLine(`구입금액을 입력해 주세요.\n`, answer => {
      const validatePay = new ValidatePay(answer);
      this.buyLotto(validatePay.count());
    });
  };

  buyLotto(count) {
    Console.print(`\n${count}개를 구매했습니다.`);

    for (let i = 0; i < count; i++) {
      const buyLottoElement = makeLotto();
      this.buyLottoArray.push(buyLottoElement);
      Console.print(buyLottoElement);
    }

    this.inputWinningNumber();
  };

  inputWinningNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', answer => {
      const validateWinningNumber = new ValidateWinnigNumber(answer);
      new Lotto(validateWinningNumber.winningNumber);
      Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
