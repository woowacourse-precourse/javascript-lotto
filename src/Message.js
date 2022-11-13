const MissionUtils = require('@woowacourse/mission-utils');

class Message {
  #print = MissionUtils.Console.print;

  print(text = '') {
    Message.validate(text);
    this.#print(text);
  }

  static validate(text) {
    if (!text) {
      throw new Error('문자열을 입력해야 합니다.');
    }
  }

  static enterPurchaseAmount() {
    return '구입금액을 입력해 주세요. \n';
  }

  static buy(amount) {
    return `${amount}개를 구매했습니다.`;
  }

  static enterWinningNumber() {
    return '당첨 번호를 입력해 주세요. \n';
  }
}

module.exports = Message;
