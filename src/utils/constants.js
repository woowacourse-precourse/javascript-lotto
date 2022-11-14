const ERROR = {
  MUST_BE_1000_UNIT: '[ERROR] 1,000원 단위의 금액만 입력 가능합니다.',
  MUST_INPUT_MORE_THAN_LOTTO_PRICE:
    '[ERROR] 1,000원 미만의 금액으로 로또를 구매할 수 없습니다.',
  MUST_HAVE_SIX_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
  MUST_INPUT_ONLY_NUMBER:
    '[ERROR] 문자, 특수기호를 제외한 1 ~ 45 사이의 숫자만 입력해야 합니다.',
  MUST_BE_WITHIN_RANGE: '[ERROR] 1 ~ 45 범위 이내의 숫자만 입력해야 합니다.',
  NOT_ALLOW_REPEATED_NUMBER: '[ERROR] 서로 다른 숫자만 입력해야 합니다.',
  MUST_NOT_BE_INCLUDED_IN_WINNING_NUMBERS:
    '[ERROR] 당첨 번호에 포함된 숫자를 보너스 번호로 지정할 수 없습니다.',
};

const MESSAGE = {
  INPUT_CASH: '구입금액을 입력해 주세요.\n',
  PURCHASED_LOTTOS_QUANTITY: '개를 구매했습니다.',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  WINNING_HISTORY: '\n당첨 통계\n---',
};

const FIRST_PLACE = {
  NUMBER: 1,
  LOTTO_COUNT: 6,
  PRIZE: '2,000,000,000원',
};

const SECOND_PLACE = {
  NUMBER: 2,
  LOTTO_COUNT: 5,
  PRIZE: '30,000,000원',
};

const THIRD_PLACE = {
  NUMBER: 3,
  LOTTO_COUNT: 5,
  PRIZE: '1,500,000원',
};

const FOURTH_PLACE = {
  NUMBER: 4,
  LOTTO_COUNT: 4,
  PRIZE: '50,000원',
};

const FIFTH_PLACE = {
  NUMBER: 5,
  LOTTO_COUNT: 3,
  PRIZE: '5,000원',
};

const WINNING_RESULT = [
  null,
  FIRST_PLACE,
  SECOND_PLACE,
  THIRD_PLACE,
  FOURTH_PLACE,
  FIFTH_PLACE,
];

const LOTTO_PRICE = 1000;
const LOTTO_NUMBERS_LENGTH = 6;

const MIN_LOTTO_NUMBER = 1;
const MAX_LOTTO_NUMBER = 45;

module.exports = {
  ERROR,
  MESSAGE,
  FIRST_PLACE,
  SECOND_PLACE,
  THIRD_PLACE,
  FOURTH_PLACE,
  FIFTH_PLACE,
  WINNING_RESULT,
  LOTTO_PRICE,
  LOTTO_NUMBERS_LENGTH,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
};
