const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  // money;

  play() {
    this.makePayment();
  }

  readLine(message, callback) {
    Console.readLine(message, callback);
  }

  print(message) {
    Console.print(message);
  }

  makePayment() {
    this.readLine("구임금액을 입력해주세요.", (value) => {
      const money = value;

      if (money % 1000 !== 0) {
        this.print("1000원 단위로 입력해주세요.");
        this.makePayment();
      }
    });
  }
}

new App().play();
module.exports = App;
