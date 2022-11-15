class Message {
  static PRICE = '구입금액을 입력해 주세요.\n';
  static PURCHASE = '개를 구매했습니다.';
  static WINNING = '\n당첨 번호를 입력해 주세요.\n';
  static BONUS = '\n보너스 번호를 입력해 주세요.\n';
  static STATISTICS = '\n당첨 통계\n---';

  static printReturnRate(rate) {
    return `총 수익률은 ${rate}%입니다.`;
  }
}

module.exports = Message;
