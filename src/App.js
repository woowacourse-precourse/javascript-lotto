const Lotto = require('./Lotto');
const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", this.letWinningNumbers);
  }

  letWinningNumbers = (winningNumbers) => {
    let winningList = winningNumbers.split(',').map(num => parseInt(num));
    console.log(winningList);
    const startLotto = new Lotto(winningList);
    startLotto;
  }
}
const a = new App;
a.play();

module.exports = App;
