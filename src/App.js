const { Console } = require('@woowacourse/mission-utils');
const ValidatePay = require('./ValidatePay');
const ValidateWinnigNumber = require('./ValidateWinningNumber');
const Lotto = require('./Lotto');
const ValidateBonusNumber = require('./ValidateBonusNumber');
const makeLotto = require('./makeLotto');

class App {

  play() {
    this.buyLottoArray = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
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
      this.winningNumber = validateWinningNumber.winningNumber
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', answer => {
      new ValidateBonusNumber(answer, this.winningNumber);
      this.bonusNumber = Number(answer);
      Console.close();
    })
  }
}

const app = new App();
app.play();

module.exports = App;
