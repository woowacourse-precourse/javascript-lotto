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
const RANK = [FIFTH_RANK, FOURTH_RANK, THIRD_RANK, SECOND_RANK, FIRST_RANK];
const WINNING_SPLIT = ',';
const PRIZE = {
  [FIRST_RANK]: 2000000000,
  [SECOND_RANK]: 30000000,
  [THIRD_RANK]: 1500000,
  [FOURTH_RANK]: 50000,
  [FIFTH_RANK]: 5000,
  [NOTHING_RANK]: 0,
};
const PRIZE_MSG = {
  [FIRST_RANK]: '6개 일치',
  [SECOND_RANK]: '5개 일치, 보너스 볼 일치',
  [THIRD_RANK]: '5개 일치',
  [FOURTH_RANK]: '4개 일치',
  [FIFTH_RANK]: '3개 일치',
};
const INPUT_PRICE_MSG = '구입금액을 입력해 주세요.\n';
const BUY_MSG = '개를 구매했습니다.';
const INPUT_WINNING_MSG = '당첨 번호를 입력해 주세요.\n';
const INPUT_BONUS_MSG = '보너스 번호를 입력해 주세요.\n';
const RESULT_INTRO_MSG = '당첨 통계\n---';
const LOTTO_LENGTH_NOT_SIX_ERROR = '[ERROR] 로또 번호는 6개의 숫자여야 합니다.';
const LOTTO_DUPLICATE_ERROR = '[ERROR] 로또 번호는 중복되면 안됩니다.';
const LOTTO_OUT_OF_RANGE_ERROR =
  '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.';
const LOTTO_NAN_ERROR = '[ERROR] 로또 번호는 숫자여야 합니다.';
const PRICE_NAN_ERROR = '[ERROR] 구입 금액은 숫자여야 합니다.';
const PRICE_TOO_LOW_ERROR = '[ERROR] 최소 구입금액은 1000원입니다.';
const PRICE_NOT_MULTIPLE_ERROR =
  '[ERROR] 구입금액은 1000원 단위로 입력해주세요.';
const BONUS_DUPLICATE_ERROR =
  '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.';

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
  RANK,
  INPUT_PRICE_MSG,
  BUY_MSG,
  INPUT_WINNING_MSG,
  INPUT_BONUS_MSG,
  RESULT_INTRO_MSG,
  LOTTO_LENGTH_NOT_SIX_ERROR,
  LOTTO_DUPLICATE_ERROR,
  LOTTO_OUT_OF_RANGE_ERROR,
  LOTTO_NAN_ERROR,
  PRICE_NAN_ERROR,
  PRICE_TOO_LOW_ERROR,
  PRICE_NOT_MULTIPLE_ERROR,
  BONUS_DUPLICATE_ERROR,
};
