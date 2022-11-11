const MESSAGE = {
  INPUT_PURCHASE_MONEY: '구입 금액을 입력해주세요.\n',
  OUTPUT_PURCHASE_ACCOUNT: (purchaseAccount) =>
    `\n${purchaseAccount}개를 구매했습니다.`,
  INPUT_WINNING_NUMBER: '\n당첨 번호를 입력해주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해주세요.\n',
  OUTPUT_WINNING_STATISTICS: '당첨 통계\n---',
};

const VALUE = {
  LOTTO_MIN_NUMBER: 1,
  LOTTO_MAX_NUMBER: 45,
  LOTTO_NUMBER_COUNT: 6,
};

const ERROR = {
  PURCHASE_MONEY_NOT_DIVISIBLE:
    '[ERROR] 로또의 구입 금액은 1000원 단위로 입력해주세요.',
  PURCHASE_MONEY_LESS_STANDARD:
    '[ERROR] 로또의 구입 금액은 1000원 이상으로 입력해주세요.',
  PURCHASE_MONEY_NAN: '[ERROR] 로또의 구입 금액은 숫자만 입력 가능합니다.',
};

module.exports = { MESSAGE, ERROR, VALUE };
