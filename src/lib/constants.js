const MESSAGE = {
  INPUT_PURCHASE_MONEY: '구입 금액을 입력해주세요.\n',
  OUTPUT_PURCHASE_ACCOUNT: (purchaseAccount) =>
    `\n${purchaseAccount}개를 구매했습니다.`,
  INPUT_WINNING_NUMBER: '\n당첨 번호를 입력해주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해주세요.\n',
  OUTPUT_WINNING_STATISTICS: '\n당첨 통계\n---',
  RESULT: (winningArray, percentage) =>
    `3개 일치 (5,000원) - ${winningArray[0]}개\n4개 일치 (50,000원) - ${winningArray[1]}개\n5개 일치 (1,500,000원) - ${winningArray[2]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningArray[3]}개\n6개 일치 (2,000,000,000원) - ${winningArray[4]}개\n총 수익률은 ${percentage}%입니다.`,
};

const VALUE = {
  LOTTO_MIN_NUMBER: 1,
  LOTTO_MAX_NUMBER: 45,
  LOTTO_NUMBER_COUNT: 6,
  LOTTO_PRICE: 1000,
};

const ERROR = {
  PURCHASE_MONEY_NOT_DIVISIBLE:
    '[ERROR] 로또의 구입 금액은 1000원 단위로 입력해주세요.',
  PURCHASE_MONEY_LESS_STANDARD:
    '[ERROR] 로또의 구입 금액은 1000원 이상으로 입력해주세요.',
  PURCHASE_MONEY_NAN: '[ERROR] 로또의 구입 금액은 숫자만 입력 가능합니다.',
  LOTTO_LENGTH_ERROR: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE_LOTTO_ERROR: '[ERROR] 로또 번호는 중복되면 안됩니다.',
  INCORRECT_RANGE_ERROR: '[ERROR] 1-45 범위의 숫자를 입력해주세요.',
  DUPLICATE_BONUS_ERROR: '[ERROR] 보너스 번호와 당첨 번호가 중복되었습니다.',
};

const LOTTO_RANGE_REGEX = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;

const REWARD_ARRAY = [5000, 50000, 1500000, 30000000, 2000000000];

module.exports = { MESSAGE, ERROR, VALUE, LOTTO_RANGE_REGEX, REWARD_ARRAY };
