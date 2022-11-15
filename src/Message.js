const MissionUtils = require('@woowacourse/mission-utils');
const Function = require('./Function');
const ARRAY_LENGTH = 5;

class Message {
  print = MissionUtils.Console.print;

  print(text = '') {
    Message.verify(text);
    this.print(text);
  }

  static verify(text) {
    if (!text) {
      throw new Error('올바른 문자를 입력하세요.');
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

  static statistics(wonResult) {
    Function.checkArrayLength(wonResult, ARRAY_LENGTH);
    return `
    당첨 통계
    ---
    3개 일치 (5,000원) - ${wonResult[0]}개
    4개 일치 (50,000원) - ${wonResult[1]}개
    5개 일치 (1,500,000원) - ${wonResult[2]}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${wonResult[3]}개
    6개 일치 (2,000,000,000원) - ${wonResult[4]}개 `;
  }

  static earningRate(percentage) {
    return `총 수익률은 ${percentage}%입니다.`;
  }
}

module.exports = Message;