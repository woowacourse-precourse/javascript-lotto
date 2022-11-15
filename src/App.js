const { Console, Random } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, ERROR_MESSAGE, MONEY } = require("./constants");
const Lotto = require("./Lotto");

class App {
  
  play() {
    this.inputMoney(INPUT_MESSAGE.Money);
  }

  inputMoney(prompt) {
    Console.readLine(`${prompt}\n`, (input) => {
      if (this.validinputMoney(input) === false) throw new Error(ERROR_MESSAGE.moneyError);
      this.money = input;
      this.countLotto(input);
    });
  }

  validinputMoney(input) {
    if (input % MONEY.LottoPrice !== 0) return false;
  }

  countLotto(money) {
    const amountLotto = money / MONEY.LottoPrice;
    Console.print(`\n${amountLotto}개를 구매했습니다.`);
    this.createLotto(amountLotto);
  }

  
}

let app = new App().play;
app.play();

module.exports = App;
