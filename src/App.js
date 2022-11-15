const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
  }

  readPurchase() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.isNull(money);
    });
  }

  readWinningNumbers() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (commaNumbers) => {
      this.isNull(commaNumbers);
    })
  }

  readBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (number) => {
      this.isNull(number);
    });
  }

  isNull(input) {
    if (input === '') throw new Error("[ERROR] 입력값이 존재하지 않습니다.")
    return true;
  }

  end() {
    Console.close();
  }
}

module.exports = App;