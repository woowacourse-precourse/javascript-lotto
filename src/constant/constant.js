const GRADE = {
  FIRST: {
    DUPLICATE_COUNT: 6,
    EXTRA_TEXT: '',
    PRIZE_MONEY: '2,000,000,000',
  },
  SECOND: {
    DUPLICATE_COUNT: 5,
    EXTRA_TEXT: ', 보너스 볼 일치',
    PRIZE_MONEY: '30,000,000',
  },
  THIRD: {
    DUPLICATE_COUNT: 5,
    EXTRA_TEXT: '',
    PRIZE_MONEY: '1,500,000',
  },
  FOURTH: {
    DUPLICATE_COUNT: 4,
    EXTRA_TEXT: '',
    PRIZE_MONEY: '50,000',
  },
  FIFTH: {
    DUPLICATE_COUNT: 3,
    EXTRA_TEXT: '',
    PRIZE_MONEY: '5,000',
  },
};

const ERROR = {
  NOT_NUMBER: "[ERROR] 로또 번호는 숫자만 입력 가능합니다.",
  NOT_UNIT_OF_LOTTO_PRICE: "[ERROR] 구입 금액은 1000원 단위로만 입력 가능합니다.",
  NOT_WINNING_NUMBER_INPUT_FORMAT: "[ERROR] 숫자를 쉼표로 구분하여 입력해주세요.",
  NOT_RANGE_OF_LOTTO_NUMBER: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  EXIST_IN_WINNING_NUMBER: "[ERROR] 보너스 번호는 당첨 번호에 존재하지 않는 값이어야 합니다.",
  NOT_VALID_LOTTO_NUMBER_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE_NUMBER: "[ERROR] 보너스 번호는 당첨 번호에 존재하지 않는 값이어야 합니다.",
}

module.exports = { GRADE, ERROR };