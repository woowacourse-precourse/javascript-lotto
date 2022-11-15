const LOTTERY_PRICE = 1000;
const MESSAGE = {
  LOTTERY_BUDGET: '구입금액을 입력해 주세요.\n',
  LOTTERY_WIN_NUMBER: '당첨 번호를 입력해 주세요.\n',
  LOTTERY_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  CALCULATE_STATICS: '당첨 통계\n---',
  NUMBER_PURHCASED: '개를 구매했습니다.',
};

const EXCEPTIONS = {
  NOT_A_NUMBER: '[ERROR] 숫자만 입력해주세요.',
  LENGTH_OVERFLOW: '[ERROR] 6개의 숫자를 입력하셔야 합니다.',
  NUMBER_OVERLAPPED: '[ERROR] 중복된 번호를 입력하셨습니다.',
  NOT_A_DECIMAL: '[ERROR] 자연수만 입력 가능합니다.',
  UNIT_ERROR: `[ERROR] 금액의 단위가 맞지 않습니다! ${LOTTERY_PRICE}원 단위로 입력해주세요!`,
};

const LOTTERY_INFO = {
  LOTTERY_LENGTH: 6,
  LOTTERY_MIN_NUMBER: 1,
  LOTTERY_MAX_NUMBER: 45,
};

module.exports = {
  LOTTERY_PRICE,
  MESSAGE,
  EXCEPTIONS,
  LOTTERY_LENGTH,
};
