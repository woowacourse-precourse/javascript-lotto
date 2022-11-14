const COMMAND = Object.freeze({
  MONEY: '구입금액을 입력해 주세요.\n',
  LOTTONUM: '개를 구매했습니다.',
  WINNING: '\n당첨 번호를 입력해 주세요.\n',
  BONUS: '\n보너스 번호를 입력해 주세요.\n',
});

const ERROR = Object.freeze({
  MONEY_DIVISIBLE: '[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.',
  MONEY_DIGIT: '[ERROR] 구입 금액은 정수로 입력해야 합니다.',
});

module.exports = { COMMAND, ERROR };
