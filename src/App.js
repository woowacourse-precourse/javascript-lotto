const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {}
  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.print('구매금액을 입력해 주세요.');
    Console.readLine('', (userInput) => {
      console.log(userInput);
    })
  }
}

const app = new App();
app.play();

module.exports = App;