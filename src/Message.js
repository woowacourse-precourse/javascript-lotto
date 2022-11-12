class Message {
  static ASK_BUDGET = "구입금액을 입력해 주세요.\n";

  static ASK_WINNING_NUMBER = "\n당첨 번호를 입력해 주세요.\n";

  static ASK_BONUS_NUMBER = "\n보너스 번호를 입력해 주세요.\n";

  static WINNING_STATS = "\n당첨통계\n---";

  static returnHowManyLotto(count) {
    return `\n${count}개를 구매했습니다.`;
  }
}

module.exports = Message;
