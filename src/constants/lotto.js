const LOTTO_ERROR_MESSAGE = Object.freeze({
  LENGTH: '로또 번호는 6개여야 합니다.',
  DUPLICATED: '로또 번호에 중복되는 숫자가 없어야 합니다.',
  RANGE: '로또 번호의 숫자 범위는 1~45까지 입니다.',
  DEFAULT: '로또 번호의 유효성을 검사하는데 예기치 못한 에러가 발생했습니다.',
});

const BONUS_ERROR_MESSAGE = Object.freeze({
  DUPLICATED: '보너스 번호는 로또 번호와 중복되는 숫자가 없어야 합니다.',
  RANGE: '로또 번호의 숫자 범위는 1~45까지 입니다.',
  DEFAULT: '보너스 번호의 유효성을 검사하는데 예기치 못한 에러가 발생했습니다.',
});

const BUDGET_ERROR_MESSAGE = Object.freeze({
  DIVIDED: '로또 구입 금액은 1000원 단위어야 합니다.',
  DEFAULT: '로또 구입 금액의 유효성을 검사하는데 예기치 못한 에러가 발생했습니다.',
});

const TICKET_PRICE = 1000;

const TICKET_NUMBER = Object.freeze({
  start: 1,
  end: 45,
  count: 6,
});

const BUDGET_MESSAGE = '구입금액을 입력해 주세요.\n';
const TICKET_MESSAGE = '개를 구매했습니다.\n';
const WINNING_NUMBER_MESSAGE = '\n당첨 번호를 입력해 주세요.\n';
const BONUS_MESSAGE = '\n보너스 번호를 입력해 주세요.\n';
const STATIC_MESSAGE = '\n당첨 통계\n---';

const LOTTO_RANK = Object.freeze({
  REWARD: {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
  },

  MESSAGE: {
    1: '6개 일치 (2,000,000,000원) - ',
    2: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    3: '5개 일치 (1,500,000원) - ',
    4: '4개 일치 (50,000원) - ',
    5: '3개 일치 (5,000원) - ',
  },
});

module.exports = {
  LOTTO_ERROR_MESSAGE,
  BONUS_ERROR_MESSAGE,
  BUDGET_ERROR_MESSAGE,
  TICKET_PRICE,
  TICKET_NUMBER,
  BUDGET_MESSAGE,
  TICKET_MESSAGE,
  WINNING_NUMBER_MESSAGE,
  BONUS_MESSAGE,
  STATIC_MESSAGE,
  LOTTO_RANK,
};
