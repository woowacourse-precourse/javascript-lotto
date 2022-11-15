const { Console } = require('@woowacourse/mission-utils');
const ValidatePay = require('./ValidatePay');

class App {
  play() {
    this.inputPay();
  };

  inputPay() {
    Console.readLine(`구입금액을 입력해 주세요.\n`, answer => {
      const validatepay = new ValidatePay(answer);
    });
  };

}

const app = new App();
app.play();

module.exports = App;
