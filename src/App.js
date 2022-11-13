const { Console } = require("@woowacourse/mission-utils");
const GenerateLotto = require('./GenerateLotto.js');

class App {
  generateLotto;
  play() {
    Console.print('구입금액을 입력해 주세요.');
    Console.readLine('', (money) => {
      this.generateLotto = new GenerateLotto(money);
    });
  }
}


const app = new App();
app.play();
module.exports = App;
