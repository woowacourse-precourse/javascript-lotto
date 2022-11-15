const ERROR_MESSAGE = {
  LOTTO: {
    LENGTH: '로또 번호는 6개여야 합니다.',
    UNIQUE: '로또 번호는 중복되지 않아야 합니다.',
    VALUE: '로또 번호는 숫자여야 합니다.',
    RANGE: '로또 번호는 1~45 사이의 수여야 합니다.',
  },
  WINNING_NUMBERS: {
    LENGTH: '당첨 번호는 쉼표를 기준으로 6자리의 수를 입력해야 합니다.',
    UNIQUE: '당첨 번호는 중복되지 않아야 합니다.',
    VALUE: '당첨 번호는 숫자 이외의 값을 입력할 수 없습니다.',
    RANGE: '당첨 번호는 1~45 사이의 수여야 합니다.',
  },
};

module.exports = ERROR_MESSAGE;
