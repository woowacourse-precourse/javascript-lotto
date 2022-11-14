const { Console } = require('@woowacourse/mission-utils');

class App {
  constructor(text) {
    this.text = text;
  }

  play() {
    Console.readLine(this.text, (cost) => {
      const quantity = cost / 1000;
      Console.print(`${'\n'}${quantity}개를 구매했습니다.`);
    });
  }
}

const test = new App(`구입금액을 입력해 주세요.${'\n'}`);
test.play();

module.exports = App;
