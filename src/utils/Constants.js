const CONSTANT = {
  MESSAGE: {
    PRICE: '구입금액을 입력해 주세요.\n',
    LOTTO_ARRAY: '개를 구매했습니다.',
    ANSWER: '\n당첨 번호를 입력해 주세요.\n',
    BONUS: '\n보너스 번호를 입력해 주세요.\n',
  },

  // RESULT: {
  //   BALL: '볼',
  //   STRIKE: '스트라이크',
  //   NOTHING: '낫싱',
  // },

  ERROR: {
    INVALID_PRICE: '[ERROR] 구입 금액은 1000단위여야 합니다.',
    INVALID_LOTTO_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
    INVALID_LOTTO_RANGE: '[ERROR] 로또 번호는 1~45사이의 수여야 합니다.',
    INVALID_LOTTO_REPEATE: '[ERROR] 로또 번호는 중복되면 안됩니다.',
    INVALID_LOTTO_WORDS: '[ERROR] 로또 번호에는 (,)와 숫자 이외의 문자가 있으면 안됩니다.',
    INVALID_BONUS_RANGE: '[ERROR] 보너스 번호는 1~45사이의 수여야 합니다.',
    INVALID_BONUS_SAME_ANSWER: '[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.',
    INVALID_BONUS_WORDS: '[ERROR] 보너스 번호에는 정수만 입력해야 합니다.',
  },

  NUMBER: {
    ANSWER_COUNT: [3,4,5,5,6],
    // ARRAY_LENGTH: 3,
    // MIN_RANGE: 1,
    // MAX_RANGE: 9,
  },
};

module.exports = CONSTANT;