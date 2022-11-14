const COMMAND = Object.freeze({
  MONEY: '구입금액을 입력해 주세요.\n',
  LOTTONUM: '개를 구매했습니다.',
  WINNING: '\n당첨 번호를 입력해 주세요.\n',
  BONUS: '\n보너스 번호를 입력해 주세요.\n',
  RESULT: '\n당첨 통계\n---',
  YIELD: '총 수익률은 ',
});

const ERROR = Object.freeze({
  MONEY_DIVISIBLE: '[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.',
  MONEY_DIGIT: '[ERROR] 구입 금액은 정수로 입력해야 합니다.',
  WINNING_DIGIT: '[ERROR] 각 당첨 번호는 정수여야 합니다.',
  WINNING_LENGTH: '[ERROR] 당첨 번호는 6개여야 합니다.',
  WINNING_RANGE: '[ERROR] 각 당첨 번호의 숫자 범위는 1 - 45까지 입니다.',
  WINNING_DUPLICATED: '[ERROR] 당첨 번호는 중복될 수 없습니다.',
  BONUS_DIGIT: '[ERROR] 보너스 번호는 정수여야 합니다.',
  BONUS_RANGE: '[ERROR] 보너스 번호의 숫자 범위는 1 - 45까지 입니다.',
  BONUS_DUPLICATED: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
});

module.exports = { COMMAND, ERROR };
