const { Console } = require('@woowacourse/mission-utils');
const Validation = require('./Validation');

class Draw {
  winning() {
    Console.readLine('당첨번호를 입력해 주세요.', (inputValue) => {
      new Validation().winningInputValue(inputValue);
      this.winningNumbers = inputValue.split(',').map((item) => Number(item));
      Console.close();
    });
  }
}

module.exports = Draw;