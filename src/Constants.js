const LOTTO_PRICE = 1000;

const LOTTO_DIGITS = 6;

const NUMBER_RANGE = {
  lower: 1,
  upper: 45,
};

const PRIZE = {
  first: 'first',
  second: 'second',
  third: 'third',
  fourth: 'fourth',
  fifth: 'fifth',
};

const PRIZE_MONEY = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

const INPUT_MESSAGE = {
  money: '구입금액을 입력해 주세요.\n',
  lucky: '\n당첨 번호를 입력해 주세요.\n',
  bonus: '\n보너스 번호를 입력해 주세요.\n',
};

const RESULT_MESSAGE = {
  title: '\n당첨 통계\n---',
  first: `${LOTTO_DIGITS}개 일치 (2,000,000,000원)`,
  second: `${LOTTO_DIGITS - 1}개 일치, 보너스 볼 일치 (30,000,000원)`,
  third: `${LOTTO_DIGITS - 1}개 일치 (1,500,000원)`,
  fourth: `${LOTTO_DIGITS - 2}개 일치 (50,000원)`,
  fifth: `${LOTTO_DIGITS - 3}개 일치 (5,000원)`,
};

const MONEY_ERROR_MESSAGE = {
  number: '[ERROR] 구입 금액은 숫자로 입력해야 합니다.',
  unit: `[ERROR] 구입 금액은 ${LOTTO_PRICE}원 단위여야 합니다.`,
};

const LOTTO_ERROR_MESSAGE = {
  digits: `[ERROR] 로또 번호는 ${LOTTO_DIGITS}개여야 합니다.`,
  integer: '[ERROR] 로또 번호는 정수여야 합니다.',
  range: `[ERROR] 로또 번호는 ${NUMBER_RANGE.lower}에서 ${NUMBER_RANGE.upper} 사이의 숫자여야 합니다.`,
  duplication: '[ERROR] 로또 번호는 중복된 숫자를 포함할 수 없습니다.',
  bonus: '[ERROR] 보너스 번호는 한자리 숫자여야 합니다.',
};

module.exports = {
  LOTTO_PRICE,
  LOTTO_DIGITS,
  NUMBER_RANGE,
  PRIZE,
  PRIZE_MONEY,
  INPUT_MESSAGE,
  RESULT_MESSAGE,
  MONEY_ERROR_MESSAGE,
  LOTTO_ERROR_MESSAGE,
};
