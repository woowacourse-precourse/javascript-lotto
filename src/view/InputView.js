const { Console } = require('@woowacourse/mission-utils');

class InputView {
  getWinningNumbers() {
    this.triggerWinningNumbersConsole((numbers) => {
      console.log(numbers);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    this.triggerBonusNumberConsole((number) => console.log(number));
  }

  triggerWinningNumbersConsole(callback) {
    Console.readLine('당첨 번호를 입력해 주세요.\n', callback);
  }

  triggerBonusNumberConsole(callback) {
    Console.readLine('보너스 번호를 입력해 주세요.\n', callback);
  }
}

const app = new InputView();
app.getWinningNumbers();
