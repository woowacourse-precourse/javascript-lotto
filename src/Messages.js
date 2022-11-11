class Messages {
  static ENTER_MONEY = '구입금액을 입력해주세요.\n';
  static ENTER_WINNER_NUMBER = '\n당첨 번호를 입력해 주세요.\n';
  static ENTER_BONUS_NUMBER = '\n보너스 번호를 입력해 주세요.\n';
  static WINNING_STATICS = '\n당첨 통계\n---';

  static SIX_NUMBERS_MESSAGES = '[ERROR] 로또 번호는 6개여야 합니다.';
  static NOT_DUPLICATE_MESSAGE = '[ERROR] 중복되지 않는 숫자를 입력해주세요.';
  static NUMBERS_IN_RANGE_MESSAGE = '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.';
}

module.exports = Object.freeze(Messages);
