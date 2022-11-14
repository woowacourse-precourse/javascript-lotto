const GAME_MESSAGE = Object.freeze({
  input_price: '구입금액을 입력해 주세요.\n',
  input_win_number: '당첨 번호를 입력해 주세요.\n',
  input_bonus_number: '보너스 번호를 입력해 주세요.\n',
});

const LOTTO_RESULT_MESSAGE = Object.freeze({
  three: '3개 일치 (5,000원) - ',
  four: '4개 일치 (50,000원) - ',
  five: '5개 일치 (1,500,000원) - ',
  bonus: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  six: '6개 일치 (2,000,000,000원) - ',
});

const LOTTO_RESULT_PRICE = Object.freeze({
  three: 5000,
  four: 50000,
  five: 1500000,
  bonus: 30000000,
  six: 2000000000,
});

const LOTTO_RESULT_TYPE = Object.freeze({
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  bonus: 99,
});

const PRICE_ERROR_MESSAGE = Object.freeze({
  not_valid_number: '숫자를 입력해주세요.',
  not_valid_unit_number: '1000원 단위로 입력해주세요.',
  not_valid_answer: '입력값이 없습니다.',
  not_valid_zero: '최소 1000원 이상 금액을 입력해주세요.',
});

const WIN_NUMBER_ERROR_MESSAGE = Object.freeze({
  not_valid_answer: '입력값이 없습니다.',
  not_valid_division: '구분은 쉼표(,)를 사용해주세요.',
  not_valid_range_number: '1부터 45 중 6개의 숫자를 입력해주세요.',
  not_valid_overlap_number: '중복되는 숫자는 입력할 수 없습니다.',
});

const BONUS_NUMBER_ERROR_MESSAGE = Object.freeze({
  not_valid_answer: '입력값이 없습니다.',
  not_valid_range_number: '1부터 45 중 6개의 숫자를 입력해주세요.',
  not_valid_overlap_number: '중복되는 숫자는 입력할 수 없습니다.',
});

const PRICE_MEASURE = 1000;

const LOTTO_RESURL_STATISTICS_MESSAGE = '\n당첨 통계\n---\n';
const RESET_ADD_BLANK = ', ';

const LOTTO_MIN_NUMBER = 1;
const LOTTO_MAX_NUMBER = 45;
const LOTTO_NUMBER = 6;

const ABSTRACT_ERROR_MESSAGE = Object.freeze({
  abstract_method: '추상 메서드입니다.',
  abstract_class: '추상 클래스입니다.',
});

module.exports = {
  GAME_MESSAGE,
  LOTTO_RESULT_MESSAGE,
  LOTTO_RESULT_PRICE,
  LOTTO_RESULT_TYPE,
  PRICE_ERROR_MESSAGE,
  WIN_NUMBER_ERROR_MESSAGE,
  BONUS_NUMBER_ERROR_MESSAGE,
  PRICE_MEASURE,
  LOTTO_RESURL_STATISTICS_MESSAGE,
  RESET_ADD_BLANK,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_NUMBER,
  ABSTRACT_ERROR_MESSAGE,
};
