const { Console } = require('@woowacourse/mission-utils');

class InputDisplay {
  readAmountInput(callback) {
    Console.readLine('구입금액을 입력해 주세요.\n', callback);
  }

  readWinningNum(callback) {
    Console.readLine('당첨 번호를 입력해 주세요.\n', callback);
  }

  readBonusNum(callback) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', callback);
  }
}

module.exports = InputDisplay;
