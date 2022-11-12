const CONSTANT = {
  MESSAGE: {
    PRICE: '구입금액을 입력해 주세요.\n',
    LOTTO_ARRAY: '개를 구매했습니다.',
    ANSWER: '\n당첨 번호를 입력해 주세요.\n',
    BONUS: '\n보너스 번호를 입력해 주세요.\n',
  },

  RESULT: {
    RESULT_START: '\n당첨 통계\n---',
    RANKING_LIST: ['3개 일치 (5,000원) - ', '4개 일치 (50,000원) - ', 
    '5개 일치 (1,500,000원) - ', '5개 일치, 보너스 볼 일치 (30,000,000원) - ', 
    '6개 일치 (2,000,000,000원) - '],
    RANKING_LIST_FINISH: '개',
    BENEFIT: '총 수익률은 ',
    BENEFIT_FINISH: '%입니다.',
  },

  ERROR: {
    ERROR_MESSAGE: '[ERROR]',
    INVALID_PRICE: ' 구입 금액은 1000단위여야 합니다.',
    INVALID_LOTTO_LENGTH: ' 로또 번호는 6개여야 합니다.',
    INVALID_LOTTO_RANGE: ' 로또 번호는 1~45사이의 수여야 합니다.',
    INVALID_LOTTO_REPEATE: ' 로또 번호는 중복되면 안됩니다.',
    INVALID_LOTTO_WORDS: ' 로또 번호에는 (,)와 숫자 이외의 문자가 있으면 안됩니다.',
    INVALID_BONUS_RANGE: ' 보너스 번호는 1~45사이의 수여야 합니다.',
    INVALID_BONUS_SAME_ANSWER: ' 보너스 번호는 당첨 번호와 중복되면 안됩니다.',
    INVALID_BONUS_WORDS: ' 보너스 번호에는 정수만 입력해야 합니다.',
  },

  NUMBER: {
    ANSWER_COUNT: [3,4,5,5,6],
    PRIZE_MONEY: [5000, 50000, 1500000, 30000000, 2000000000],
  },
};

module.exports = CONSTANT;