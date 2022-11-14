const MESSAGES = {
  PAY_COST: '구입금액을 입력해 주세요.\n',
  PURCHASED_MESSAGE: (num) => `${num}개를 구매했습니다.`,
  INPUT_LOTTO_ANSWER: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_ANSWER: '보너스 번호를 입력해 주세요.\n',
};

const LOTTO_ERROR = {
  LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  NUMBER: '[ERROR] 숫자 외의 값을 입력하셨습니다.',
  RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  DUPLICATE: '[ERROR] 중복되지 않게 로또 번호를 입력해 주세요.',
};

const BONUS_ERROR = {
  DUPLICATE: '[ERROR] 중복되지 않게 로또 번호를 입력해 주세요.',
  RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  ONLY_NUMBER: '[ERROR] 숫자 외의 값을 입력하셨습니다.',
};

const PAY_ERROR = {
  ONLY_NUMBER: '[ERROR] 숫자 외의 값을 입력하셨습니다.',
  UNIT: '[ERROR] 1000원 단위로만 구매 가능합니다.',
  UNDER: '[ERROR] 1000원 이하로 입력하셨습니다.',
};

module.exports = { MESSAGES, LOTTO_ERROR, BONUS_ERROR, PAY_ERROR };