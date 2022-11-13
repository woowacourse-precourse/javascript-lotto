const GAME_MESSAGE = {
  input_price: '구입금액을 입력해 주세요.\n',
  input_win_number: '당첨 번호를 입력해 주세요.\n',
  input_bonus_number: '보너스 번호를 입력해 주세요.\n',
};

const LOTTO_RESULT_MESSAGE = {
  result_three_match: '3개 일치 (5,000원) - ',
  result_four_match: '4개 일치 (50,000원) - ',
  result_five_match: '5개 일치 (1,500,000원) - ',
  result_five_bonus_match: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  result_six_match: '6개 일치 (2,000,000,000원) - ',
};

const LOTTO_RESULT_PRICE = {
  result_three_number: 5000,
  result_four_number: 50000,
  result_five_number: 1500000,
  result_five_bonus_number: 30000000,
  result_six_number: 2000000000,
};

const LOTTO_RESULT_TYPE = {
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  bonus: 99,
};

const PRICE_ERROR_MESSAGE = {
  not_valid_number: '숫자를 입력해주세요.',
  not_valid_unit_number: '1000원 단위로 입력해주세요.',
  not_valid_answer: '입력값이 없습니다.',
};

const WIN_NUMBER_ERROR_MESSAGE = {
  not_valid_answer: '입력값이 없습니다.',
  not_valid_division: '구분은 쉼표(,)를 사용해주세요.',
  not_valid_range_number: '1부터 45까지의 숫자를 입력해주세요.',
  not_valid_overlap_number: '중복되는 숫자는 입력할 수 없습니다.',
};

const BONUS_NUMBER_ERROR_MESSAGE = {
  not_valid_answer: '입력값이 없습니다.',
  not_valid_range_number: '1부터 45까지의 숫자를 입력해주세요.',
  not_valid_overlap_number: '중복되는 숫자는 입력할 수 없습니다.',
};

const PRICE_MEASURE = 1000;

const LOTTO_RESURL_STATISTICS_MESSAGE = '\n당첨 통계\n---\n';

const LOTTO_MIN_NUMBER = 1;
const LOTTO_MAX_NUMBER = 45;
const LOTTO_NUMBER = 6;

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
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_NUMBER,
};
