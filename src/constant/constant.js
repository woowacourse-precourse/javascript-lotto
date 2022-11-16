const LOTTO = {
  INPUT_COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
};

const COST = {
  DIVIDE: 1_000,
};

const INPUT_MESSAGE = {
  COST: '구입금액을 입력해 주세요.',
  LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const BUY_MESSAGE = '개를 구매했습니다.';

const ERROR = '[ERROR] ';

const ERROR_MESSAGE = {
  COST: `${ERROR}구입 금액은 1,000원 단위로 이루어져야 합니다.`,
  LOTTO: {
    NUMBER_DUPLICATED: `${ERROR}로또 번호에 중복된 숫자가 있습니다.`,
    NUMBER_RANGE: `${ERROR}로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
    NUMBER_COUNT: `${ERROR}로또 번호는 6개여야 합니다.`,
  },
  BONUS: {
    NUMBER_DUPLICATED: `${ERROR}로또 번호에 보너스 숫자와 중복된 숫자가 있습니다.`,
  },
  NOT_NUMBER: `${ERROR}숫자를 입력해야 합니다.`,
};

module.exports = {
  LOTTO,
  COST,
  INPUT_MESSAGE,
  BUY_MESSAGE,
  ERROR_MESSAGE,
};
