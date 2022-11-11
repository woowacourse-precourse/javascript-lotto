const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    // this.lotto = new Lotto();
  }

  play() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (inputNum) => {
      new Lotto(inputNum);
      // lotto();
    });
  }
}

new App().play();

// module.exports = App;
