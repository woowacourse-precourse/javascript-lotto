const { Console } = require('@woowacourse/mission-utils');

class Input {
  getInputNum() {
    this.getInputNumConsole((numbers) => console.log(numbers));
  }

  getInputNumConsole(callback) {
    Console.readLine('당첨 번호를 입력해 주세요.\n', callback);
  }
}

const app = new Input();
app.getInputNum();
