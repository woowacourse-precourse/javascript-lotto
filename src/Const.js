const LOTTO_PICK_COUNT = 6;
const LOTTO_MIN_NUMBER = 1;
const LOTTO_MAX_NUMBER = 45;
const PRICE_PER_LOTTO = 1000;
const BUY_LOTTO_MESSAGE = '구매금액을 입력해주세요.';
const LOTTO_COUNT_MESSAGE = '개를 구매했습니다.';
const INPUT_HIT_NUMBER_MESSAGE = '당첨 번호를 입력해 주세요.';
const INPUT_BONUS_NUMBER_MESSAGE = '보너스 번호를 입력해 주세요.';
const LOTTO_NUMBER_ERROR = '[ERROR] 로또 번호에 중복된 번호가 있습니다.';
const LOTTO_HIT_NUMBER_INPUT_ERROR = {
  NOT_A_LOTTO_PICK_COUNT_EXCEPTION: `[ERROR] 입력한 로또 당첨 번호의 갯수가 ${LOTTO_PICK_COUNT}개가 아닙니다.`,
  DUPLICATED_NUMBER_EXIST_EXCEPTION: '[ERROR] 입력한 로또 당첨 번호중에 중복된 번호가 있습니다.',
  NOT_IN_RANGE_EXCEPTION: `[ERROR] 입력한 로또 당첨 번호가 ${LOTTO_MIN_NUMBER}과 ${LOTTO_MAX_NUMBER} 사이에 존재하지 않습니다.`,
  NOT_A_NUMBER_EXCEPTION: '[ERROR] 입력한 로또 번호가 숫자가 아닙니다.',
};

const LOTTO_BONUS_NUMBER_INPUT_ERROR = {
  DUPLICATED_NUMBER_EXIST_EXCEPTION: '[ERROR] 로또 당첨 번호에 보너스 번호가 이미 있습니다.',
  NOT_IN_RANGE_EXCEPTION: `[ERROR] 입력한 보너스 번호가 ${LOTTO_MIN_NUMBER}과 ${LOTTO_MAX_NUMBER} 사이에 존재하지 않습니다.`,
  NOT_A_NUMBER_EXCEPTION: '[ERROR] 입력한 보너스 번호가 숫자가 아닙니다.',
};

const WINNING_COUNT_MESSAGE = {
  FIFTH: '3개 일치 (5,000원) - ',
  FOURTH: '4개 일치 (50,000원) - ',
  THIRD: '5개 일치 (1,500,000원) - ',
  SECOND: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  FIRST: '6개 일치 (2,000,000,000원) - ',
};

const LOTTO_BUY_ERROR = {
  UNDER_ZERO_EXCEPTION: '[ERROR] 로또 구입 금액은 0원 이상이여야 합니다.',
  NOT_A_NUMBER_EXCEPTION: '[ERROR] 로또 구입 금액은 숫자여야 합니다.',
  NOT_A_PRICE_UNIT_EXCEPTION: `[ERROR] 로또 구입 금액은 ${PRICE_PER_LOTTO}단위여야 합니다.`,
};

module.exports = {
  LOTTO_PICK_COUNT,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  PRICE_PER_LOTTO,
  LOTTO_HIT_NUMBER_INPUT_ERROR,
  LOTTO_BONUS_NUMBER_INPUT_ERROR,
  BUY_LOTTO_MESSAGE,
  LOTTO_COUNT_MESSAGE,
  INPUT_BONUS_NUMBER_MESSAGE,
  INPUT_HIT_NUMBER_MESSAGE,
  LOTTO_NUMBER_ERROR,
  WINNING_COUNT_MESSAGE,
  LOTTO_BUY_ERROR,
};
