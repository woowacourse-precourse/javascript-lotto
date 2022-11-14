const { Console } = require('@woowacourse/mission-utils');

class App {
  constructor(text) {
    this.text = text;
  }

  play() {
    Console.readLine(this.text, (answer) => Console.print(answer));
  }
}

const test = new App('구입금액을 입력해 주세요.');
test.play();

module.exports = App;
