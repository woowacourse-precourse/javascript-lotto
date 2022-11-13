const MissionUtils = require('@woowacourse/mission-utils');

const Application = require('./Application');

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

  static enterBonusNumber() {
    return '보너스 번호를 입력해 주세요. \n';
  }

  static statistics(winningAmount) {
    const MAX_LENGTH = 5;
    const [ZERO, ONE, TWO, THREE, FOUR] = [0, 1, 2, 3, 4];

    Application.validateArrayLength(winningAmount, MAX_LENGTH);

    return `
    당첨 통계
    ---
    3개 일치 (5,000원) - ${winningAmount[ZERO]}개
    4개 일치 (50,000원) - ${winningAmount[ONE]}개
    5개 일치 (1,500,000원) - ${winningAmount[TWO]}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningAmount[THREE]}개
    6개 일치 (2,000,000,000원) - ${winningAmount[FOUR]}개 `;
  }

  static grossReturn(percentage) {
    return `총 수익률은 ${percentage}%입니다.`;
  }
}

module.exports = Message;
