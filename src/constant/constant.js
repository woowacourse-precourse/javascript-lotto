const ERROR = '[ERROR] ';

const ERROR_MESSAGE = {
  COST: `${ERROR}구입 금액은 1,000원 단위로 이루어져야 합니다.`,
  NUMBER_RANGE: `${ERROR}로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
};

const INPUT_MESSAGE = {
  COST: '구입금액을 입력해 주세요.',
  LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const OUTPUT_MESSAGE = {
  BUY_COUNT: '개를 구매했습니다.',
};

module.exports = {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
};
