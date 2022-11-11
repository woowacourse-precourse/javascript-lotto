const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  static priceInput() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      Console.print(answer);
    });
  }

  static lottoCountGetter(inputPrice) {
    return inputPrice / 1000;
  }

  play() {
    App.priceInput();
  }
}

// const app = new App();
// app.play();

module.exports = App;
