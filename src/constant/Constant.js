const LOTTO = Object.freeze({
  COUNT: 6,
  MIN_NO: 1,
  MAX_NO: 45,
  PRICE: 1_000,
  PRIZE_REQUIRED_SCORE: 3,
  PRIZE_REQUIRED_WITH_BONUS: 5,
  BONUS_REQUIRED_SCORE: 1,
});

const ERROR = Object.freeze({
  LOTTO_COUNT_INCORRECT: '[ERROR] 당첨 로또의 개수는 6개여야 합니다.',
  LOTTO_DUPLICATED: '[ERROR] 당첨 로또에는 같은 수가 여러 개 있어서는 안 됩니다',
  LOTTO_INVALID_VALUE: '[ERROR] 당첨 로또의 번호는 1 이상 45 이하의 자연수여야 합니다.',
  BONUS_INVALID_VALUE: '[ERROR] 보너스 숫자의 번호는 1 이상 45 이하의 자연수여야 합니다.',
  MONEY_INVALID_VALUE: '[ERROR] 금액은 1000의 양의 배수여야 합니다.',
  REGULAR_LOTTO_AND_BONUS_NUMBER_DUPLICATED:
    '[ERROR] 일반 번호와 보너스 번호가 서로 겹쳐서는 안 됩니다.',
});

const MESSAGE = Object.freeze({
  PLEASE_INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  PLEASE_INPUT_LOTTOS_NO: '\n당첨 번호를 입력해 주세요.\n',
  PLEASE_INPUT_BONUS_NO: '\n보너스 번호를 입력해 주세요.\n',
});

const REGEX = Object.freeze({
  TEMPLATE_USELESS_WHITESPACE: /^(\n| +)/gm,
  LOTTO_NUMBER_FORMAT: /^(4[0-5]|[1-3]\d|[1-9])$/,
  MONEY_FORMAT: /^[1-9]\d*0{3}$/,
});

const PRIZE_TEXT = Object.freeze({
  3: 'threeSame',
  4: 'fourSame',
  5: 'fiveSame',
  6: 'allSame',
  BONUS: 'fiveSameWithBonus',
});

const PRIZE_AMOUNT = Object.freeze({
  3: 5_000,
  4: 50_000,
  5: 1_500_000,
  6: 2_000_000_000,
  BONUS: 30_000_000,
});

module.exports = Object.freeze({
  LOTTO,
  ERROR,
  MESSAGE,
  REGEX,
  PRIZE_TEXT,
  PRIZE_AMOUNT,
});
