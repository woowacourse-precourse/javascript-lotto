const { Console } = require('@woowacourse/mission-utils');


class App {
  play() {
    this.inputPay();
  }

  inputPay() {
    Console.readLine(`구입금액을 입력해 주세요.\n`, answer => {
      Console.print(answer);
    })
  }

}

const app = new App();
app.play();

module.exports = App;
