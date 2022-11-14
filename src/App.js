const { Console } = require("@woowacourse/mission-utils");
const InputMoney = require("./InputMoney");

class App {
  constructor() {
    this.money = 0;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.money = new InputMoney(money).validate();

      this.printLotto(money);
    });
  }
  
  printLotto(money) {
    Console.print(`${money / 1000}개를 구매했습니다.`);
  }

}

module.exports = App;
