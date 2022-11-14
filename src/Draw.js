const { Console } = require('@woowacourse/mission-utils');
const Validation = require('./Validation');

class Draw {
  winning() {
    Console.readLine('당첨번호를 입력해 주세요.', (inputValue) => {
      new Validation().winningValue(inputValue);
      this.winningNumbers = inputValue.split(',').map((item) => Number(item));
      Console.close();
      this.bonus();
      this.totalNumbers = [...this.winningNumbers, this.bonusNumber];
    });
    return this.totalNumbers;
  }

  bonus() {
    Console.readLine('보너스 번호를 입력해 주세요.', (inputValue) => {
      Console.close();
      this.bonusNumber = Number(inputValue);
    });
  }
}

module.exports = Draw;