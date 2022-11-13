const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.print('구입금액을 입력해 주세요.');
    Console.readLine('', (money) => {
      console.log(money);
    });
  }
}


const app = new App();
app.play();
module.exports = App;
