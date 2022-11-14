class Messages {
  static ENTER_MONEY = '구입금액을 입력해주세요.\n';
  static ENTER_WINNER_NUMBER = '\n당첨 번호를 입력해 주세요.\n';
  static ENTER_BONUS_NUMBER = '\n보너스 번호를 입력해 주세요.\n';
  static WINNING_STATICS = '\n당첨 통계\n---';

  static ZERO_REST = '[ERROR] 1,000원으로 나누어 떨어지는 금액을 입력해주세요.';

  static SIX_NUMBERS = '[ERROR] 쉼표로 구분된 6개의 로또 번호를 입력해주세요.';
  static NOT_DUPLICATE = '[ERROR] 중복되지 않는 숫자를 입력해주세요.';
  static NUMBERS_IN_RANGE = '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.';

  static ONE_NUMBER_IN_RANGE = '[ERROR] 1부터 45 사이의 1개의 숫자만 입력해주세요.';
}

module.exports = Object.freeze(Messages);
