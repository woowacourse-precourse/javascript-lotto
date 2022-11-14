const POOL = 45;
const PRICE = 1000;
const PICK_NUM = 6;
const MAX_NUM = 45;
const MIN_NUM = 1;
const FIRST_RANK = 1;
const SECOND_RANK = 2;
const THIRD_RANK = 3;
const FOURTH_RANK = 4;
const FIFTH_RANK = 5;
const NOTHING_RANK = 0;
const INPUT_PRICE_MSG = '구입금액을 입력해 주세요.\n';
const LOTTO_LENGTH_NOT_SIX_ERROR = '[ERROR] 로또 번호는 6개의 숫자여야 합니다.';
const LOTTO_DUPLICATE_ERROR = '[ERROR] 로또 번호는 중복되면 안됩니다.';
const LOTTO_OUT_OF_RANGE_ERROR =
  '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.';
const LOTTO_NAN_ERROR = '[ERROR] 로또 번호는 숫자여야 합니다.';
const PRICE_NAN_ERROR = '[ERROR] 구입 금액은 숫자여야 합니다.';
const PRICE_TOO_LOW_ERROR = '[ERROR] 최소 구입금액은 1000원입니다.';
const PRICE_NOT_MULTIPLE_ERROR =
  '[ERROR] 구입금액은 1000원 단위로 입력해주세요.';

module.exports = {
  POOL,
  PRICE,
  PICK_NUM,
  MAX_NUM,
  MIN_NUM,
  PRIZE,
  PRIZE_MSG,
  FIRST_RANK,
  SECOND_RANK,
  THIRD_RANK,
  FOURTH_RANK,
  FIFTH_RANK,
  NOTHING_RANK,
  WINNING_SPLIT,
  INPUT_PRICE_MSG,
  LOTTO_LENGTH_NOT_SIX_ERROR,
  LOTTO_DUPLICATE_ERROR,
  LOTTO_OUT_OF_RANGE_ERROR,
  LOTTO_NAN_ERROR,
  PRICE_NAN_ERROR,
  PRICE_TOO_LOW_ERROR,
  PRICE_NOT_MULTIPLE_ERROR,
};
