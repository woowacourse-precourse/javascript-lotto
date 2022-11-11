const { Console } = require("@woowacourse/mission-utils");
class App {
  play() {
    Console.readLine('구입금액을 입력해 주세요.\n', this.issueLotto.bind(this));
  }

  issueLotto(input) {
    
  }
}

module.exports = App;

const ap = new App();
ap.play();