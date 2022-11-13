const ERROR = {
  MUST_BE_1000_UNIT: '[ERROR] 1,000원 단위의 금액만 입력 가능합니다.',
  MUST_INPUT_MORE_THAN_1000:
    '[ERROR] 1,000원 미만의 금액으로 로또를 구매할 수 없습니다.',
  MUST_BE_NUMBER: '[ERROR] 숫자만 입력해야 합니다.',
  MUST_HAVE_SIX_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
  MUST_INPUT_ONLY_NUMBER:
    '[ERROR] 문자, 특수기호를 제외한 1 ~ 45 사이의 숫자만 입력해야 합니다.',
  MUST_BE_WITHIN_RANGE: '[ERROR] 1 ~ 45 범위 이내의 숫자만 입력해야 합니다.',
  NOT_ALLOW_REPEATED_NUMBER: '[ERROR] 서로 다른 숫자만 입력해야 합니다.',
  MUST_NOT_BE_INCLUDED_IN_WINNING_NUMBER:
    '[ERROR] 당첨 번호에 포함된 숫자를 보너스 번호로 지정할 수 없습니다.',
};

const MESSAGE = {
  INPUT_CASH: '구입금액을 입력해 주세요.\n',
  COUNT_OF_PURCHASED_LOTTOS: '개를 구매했습니다.',
  INPUT_LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  WINNING_HISTORY: '\n당첨 통계\n---',
  INFO_OF_FIFTH_PLACE: '3개 일치 (5,000원) - ',
  INFO_OF_FOURTH_PLACE: '4개 일치 (50,000원) - ',
  INFO_OF_THIRD_PLACE: '5개 일치 (1,500,000원) - ',
  INFO_OF_SECOND_PLACE: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  INFO_OF_FIRST_PLACE: '6개 일치 (2,000,000,000원) - ',
};

const INPUT_UNITS = 1000;
const COUNT_OF_PICKING = 6;

const MIN_LOTTO_NUMBER = 1;
const MAX_LOTTO_NUMBER = 45;

const FIRST_PLACE_NUMBER = 1;
const SECOND_PLACE_NUMBER = 2;
const THIRD_PLACE_NUMBER = 3;
const FOURTH_PLACE_NUMBER = 4;
const FIFTH_PLACE_NUMBER = 5;

const AMOUNT_OF_FIRST_PLACE = 6;
const AMOUNT_OF_SECOND_PLACE = 5;
const AMOUNT_OF_FOURTH_PLACE = 4;
const AMOUNT_OF_FIFTH_PLACE = 3;

module.exports = {
  ERROR,
  MESSAGE,
  INPUT_UNITS,
  COUNT_OF_PICKING,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  FIRST_PLACE_NUMBER,
  SECOND_PLACE_NUMBER,
  THIRD_PLACE_NUMBER,
  FOURTH_PLACE_NUMBER,
  FIFTH_PLACE_NUMBER,
  AMOUNT_OF_FIRST_PLACE,
  AMOUNT_OF_SECOND_PLACE,
  AMOUNT_OF_FOURTH_PLACE,
  AMOUNT_OF_FIFTH_PLACE,
};
