const { Console } = require('@woowacourse/mission-utils');

class InputView {
  getWinningNumbers() {
    this.triggerWinningNumbersConsole((numbers) => console.log(numbers));
  }

  triggerWinningNumbersConsole(callback) {
    Console.readLine('당첨 번호를 입력해 주세요.\n', callback);
  }
}

const app = new InputView();
app.getWinningNumbers();
